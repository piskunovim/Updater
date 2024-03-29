//---------------------------------------------------------------------------


#pragma hdrstop

#include "CSevenZip.h"
#include "common.h"
#include "showerror.h"


const unsigned long BufferSize = 10240;                                         // ������ ������ �����
const long IterationTime = 10000;                                               // ����� �������� ��������� ��������, ��
const long OperationTimeOut = 300000;                                           // ������� �� �������� � �������, ��
const bool bSilent = true;
//---------------------------------------------------------------------------

AnsiString CSevenZip::List()
{
  AnsiString Output;
  if (ExecCmd("7z.exe l \""+ArchiveFileName+"\"", Output) == 0)
    return Output;
  else
    return "";
}

//---------------------------------------------------------------------------

bool CSevenZip::Test()
{
  AnsiString Output;
  return (ExecCmd("7z.exe t \""+ArchiveFileName+"\"", Output) == 0);
  //return (ExecCmd("7z.exe t \""+ArchiveFileName+"\"", Output, bSilent) == 0);
}

//---------------------------------------------------------------------------

bool CSevenZip::Compress(AnsiString FilesToCompress)
{
  AnsiString Output;
  unsigned long ArchiverExitCode = ExecCmd("7z.exe a -r0 \"" + ArchiveFileName + "\" " + FilesToCompress, Output);

  if (ArchiverExitCode == STILL_ACTIVE)
  {
    if (FileExists(ArchiveFileName))
      if (!DeleteFile(ArchiveFileName))
        Log->Write("Error deleting \'" + ArchiveFileName + "\' file!");
  }

  return (ArchiverExitCode == 0);
}

//---------------------------------------------------------------------------

bool CSevenZip::Extract(AnsiString OutDir)
{
  AnsiString Output;
  return (ExecCmd(AnsiString("7z.exe x -y ") + (OutDir != "" ? (AnsiString("-o") + "\"" + OutDir + "\" ") : AnsiString("") ) + "\"" + ArchiveFileName + "\"", Output) == 0);
}

//---------------------------------------------------------------------------

unsigned long CSevenZip::ExecCmd(AnsiString CmdLine, AnsiString &Output, bool bSilentMode)
{
  if (!bSilentMode) Log->Write("Executing \'"+CmdLine+"\'...");

  unsigned long ExitCode = STILL_ACTIVE;
  STARTUPINFO si;
  PROCESS_INFORMATION pi;

  HANDLE hPipeOutputRead = NULL;
  HANDLE hPipeOutputWrite = NULL;
  HANDLE hPipeErrorsRead = NULL;
  HANDLE hPipeErrorsWrite = NULL;
  SECURITY_ATTRIBUTES sa;

  char env[100];

  ZeroMemory(&sa, sizeof(sa));
  sa.nLength = sizeof(sa);
  sa.bInheritHandle = true;
  sa.lpSecurityDescriptor = NULL;

  CreatePipe(&hPipeOutputRead, &hPipeOutputWrite, &sa, 0);                      // ������� pipes ��� ����������� �����-������
  CreatePipe(&hPipeErrorsRead, &hPipeErrorsWrite, &sa, 0);

  ZeroMemory(&si, sizeof(si));
  si.cb = sizeof(si);
  si.dwFlags = STARTF_USESHOWWINDOW | STARTF_USESTDHANDLES;
  si.wShowWindow = SW_HIDE;
  si.lpDesktop="WinSta0\\Default";
  si.hStdInput = 0;
  si.hStdOutput = hPipeOutputWrite;
  si.hStdError = hPipeErrorsWrite;

  ZeroMemory(&pi, sizeof(pi));
  ZeroMemory(&env, sizeof(env));

  try
  {
    if (!CreateProcess( NULL, (LPTSTR)(CmdLine).c_str(),
                        NULL,             // Process handle not inheritable.
                        NULL,             // Thread handle not inheritable.
                        true,            // Set handle inheritance to FALSE.
                        CREATE_NEW_CONSOLE | NORMAL_PRIORITY_CLASS, //CREATE_NEW_CONSOLE|CREATE_DEFAULT_ERROR_MODE|CREATE_NEW_PROCESS_GROUP,                // No creation flags.
                        &env,             // Use parent's environment block.
                        NULL,             // Use parent's starting directory.
                        &si,              // Pointer to STARTUPINFO structure.
                        &pi))
    {
      Log->Write("Executing \'"+CmdLine+"\'...");
      Log->Append(ShowError("Starting program error!"));
      ExitCode = -1;
    }
    else
    {
      if (!bSilentMode) Log->Append("OK.");

      int Iterations = 0;

      while (ExitCode == STILL_ACTIVE)                                          // ��������� ��������� ����������� ��������
      {
        //while (true) {}
        Iterations++;
        WaitForSingleObject(pi.hProcess, IterationTime);                        // ���� �������� �����
        char szBuffer[BufferSize];
        unsigned long lNumberOfBytesRead = 0;
        unsigned long lNumberOfBytesToRead = BufferSize;
        bool ReadOK = true;
        AnsiString PartialOutput;

        while (ReadOK)                                                          // ������ �� pipe ������ started process
        {
          ReadOK = ReadFile(hPipeOutputRead, szBuffer, lNumberOfBytesToRead, &lNumberOfBytesRead, NULL);
          if (!ReadOK)
          {
            Log->Write("Error reading process output!");
          }
          else
          {
            PartialOutput += AnsiString(szBuffer, lNumberOfBytesRead);
          }
          if (lNumberOfBytesRead != BufferSize)                                 // ��������� �� �����
            break;
        }

        if (!bSilentMode) Log->Write(ChangeChars(PartialOutput,"\r\n\r\n"," "));
        GetExitCodeProcess(pi.hProcess,&ExitCode);                              // ������� �������� ������?
        Output += PartialOutput;

        if (IterationTime*Iterations > OperationTimeOut)
        {
          Log->Write("Program timed out.");
          break;
        }
      }
      if (ExitCode != STILL_ACTIVE)
      {
        //if (!bSilentMode)
          Log->Write("Program returned error code: " + AnsiString(ExitCode) + "."); // ���������� ���������� ��������
      }
      else
      {
        if (TerminateProcess(pi.hProcess, NO_ERROR))                            // ����� �� ��������
        {
          Sleep(3000);
          if (!bSilentMode)
            Log->Write("Program terminated.");
        }
        else
          if (!bSilentMode)
            Log->Write("Error terminating program!");
      }
    }
  }
  catch(Exception& error)
  {
    Log->Write("ExecCmd() exception: " + AnsiString(error.Message));
    ExitCode = -2;
  }

  if (pi.hProcess)
    CloseHandle(pi.hProcess);
  if (hPipeOutputRead)
    CloseHandle(hPipeOutputRead);
  if (hPipeOutputWrite)
    CloseHandle(hPipeOutputWrite);
  if (hPipeErrorsRead)
    CloseHandle(hPipeErrorsRead);
  if (hPipeErrorsWrite)
    CloseHandle(hPipeErrorsWrite);
  return ExitCode;
}

//---------------------------------------------------------------------------

/*AnsiString ShowError(AnsiString Header)
{
  LPVOID lpMsgBuf = NULL;
  AnsiString Temp;
  try
  {
    try
    {
      int ErrorCode = GetLastError();
      if (ErrorCode!=0)
      {
        FormatMessage(FORMAT_MESSAGE_ALLOCATE_BUFFER | FORMAT_MESSAGE_FROM_SYSTEM,NULL,ErrorCode,MAKELANGID(LANG_NEUTRAL, SUBLANG_DEFAULT),(LPTSTR) &lpMsgBuf,0,NULL);
        Temp=Header+": "+AnsiString(ErrorCode)+" "+AnsiString((char*)lpMsgBuf);
      }
    }
    catch (Exception &exception)
    {
      Temp = "Exception in ShowError: "+exception.Message;
    }
  }
  __finally
  {
    if (lpMsgBuf)
      LocalFree(lpMsgBuf);
    return Temp;
  }
}*/

#pragma package(smart_init)

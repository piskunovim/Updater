#include <vcl.h>
#include <stdio.h>
#include <time.h>
#pragma hdrstop

#ifndef LogClassH
#include "LogClass.h"
#pragma package(smart_init)

TLogClass::TLogClass(AnsiString Prefix,AnsiString Version, ErrorCallbackFunc callback, AnsiString _SubFolder)
{
  Enable = true;
  CriticalSection = NULL;
  _Prefix = Prefix;
  CriticalSection = new TCriticalSection();
  Counter = 0;
  LogInit = false;
  LogTemplate = "%04i-%02i-%02i-";
  LogFile = 0;
  version = Version;
  ErrorCallback = callback;
  SubFolder = _SubFolder;
  iref_count = 1;

  try
  {
      if (!DirectoryExists("logs"))
          CreateDir("logs");
      if (SubFolder.IsEmpty() == false)
      {
          SubFolder = ".\\logs\\"+SubFolder;
          if (!DirectoryExists(SubFolder))
              CreateDir(SubFolder);
          SubFolder += "\\";
      }
      else
          SubFolder = ".\\logs\\";
      SetLogName();
  }
  catch(...)
  {
    if(ErrorCallback)
        ErrorCallback();
  }
}

TLogClass::~TLogClass()
{
  //если поток не успел завершиться, принудительно его завершаем
  try
  {
    if (CriticalSection)
    CriticalSection->Acquire();
    try
    {
        if (LogFile)
        {
            delete LogFile;
            LogFile = NULL;
            LogInit = false;
        }
    }
    __finally
    {
        if (CriticalSection)
        CriticalSection->Release();
        if (CriticalSection)
          delete CriticalSection;
    }
  }
  catch(...)
  {
  }
}

void TLogClass::SetLogName()
{
    time_t tim = time(NULL);
    struct tm* TIME;
    TIME = localtime(&tim);
    AnsiString DateLogName;
    DateLogName.sprintf(LogTemplate.c_str(),TIME->tm_year+1900,TIME->tm_mon+1,TIME->tm_mday);

    LogName = SubFolder + DateLogName + _Prefix + ".log";

    if (_FileName != LogName)
    {
        _FileName = LogName;
        if (LogFile)
        {
            delete LogFile;
            LogFile = NULL;
            LogInit = false;
        }

        do
        {
            if (Counter != 0)
            {
                Sleep(100);
                LogName = SubFolder + DateLogName + _Prefix + AnsiString(Counter) + ".log";
                _FileName = LogName;
            }
            if (FileExists(_FileName))
                LogFile = new TFileStream(_FileName, fmOpenReadWrite | fmShareDenyNone);
            else
            {
                LogFile = new TFileStream(_FileName, fmCreate | fmShareDenyNone);
                if (LogFile)
                {
                    delete LogFile;
                    LogFile = NULL;
                    LogInit = false;
                }
                LogFile = new TFileStream(_FileName, fmOpenReadWrite | fmShareDenyNone);
            }
            LogInit = true;
            if ((LogFile == NULL)||(LogFile->Handle == 0))
            {
                if (LogFile)
                {
                    delete LogFile;
                    LogFile = NULL;
                    LogInit = false;
                }
                LogInit = false;
            }
            Counter++;
        }
        while((LogInit==false)&&(Counter<=5));

        if ((LogFile == NULL)||(LogFile->Handle == 0))
        {
            if (LogFile)
            {
                delete LogFile;
                LogFile = NULL;
                LogInit = false;
            }
            LogInit = false;
            if(ErrorCallback)
                ErrorCallback();
            return;
        }

        _FileName = LogName;
        Counter = 0;

        if (!version.IsEmpty())
            InsertVersionInfo(version);
    }
}

void TLogClass::_Write(AnsiString LogString)
{
  if (!Enable)
    return;
  if (CriticalSection)
      CriticalSection->Acquire();
  try
  {
    SetLogName();
    if (!LogInit)
      return;
    LogFile->Seek(0,soFromEnd);
    LogString = LogString+"\r\n";
    WriteWithControl(LogString.c_str(), LogString.Length());
  }
  __finally
  {
    if (CriticalSection)
        CriticalSection->Release();
  }
}

void TLogClass::Write(AnsiString LogString)
{
  if (LogString == "")
    return;
  if (!Enable)
    return;
  if (CriticalSection)
      CriticalSection->Acquire();
  SYSTEMTIME* systime;
  try
  {
    SetLogName();
    if (!LogInit)
      return;
    time_t tim = time(NULL);
    struct tm* TIME;
    TIME = localtime(&tim);
    AnsiString mess;
    systime = new SYSTEMTIME();
    GetSystemTime(systime);
    mess.sprintf("%02i.%02i.%i %02i:%02i:%02i.%03i ",TIME->tm_mday,TIME->tm_mon+1,TIME->tm_year+1900,TIME->tm_hour,TIME->tm_min,TIME->tm_sec, systime->wMilliseconds);
    LogFile->Seek(0,soFromEnd);
    WriteWithControl(mess.c_str(), mess.Length());
    DateLineLength = mess.Length();
    LogString = LogString+"\r\n";
    WriteWithControl(LogString.c_str(), LogString.Length());
  }
  __finally
  {
    delete systime;
    if (CriticalSection)
        CriticalSection->Release();
  }
}

void TLogClass::Append(AnsiString LogString)
{
  if (LogString == "")
    return;
  if (!Enable)
    return;
  if (CriticalSection)
      CriticalSection->Acquire();
  try
  {
    SetLogName();
    if (!LogInit)
      return;
    LogFile->Seek(0,soFromEnd);
    LogFile->Seek(-2,1);
    LogString += "\r\n";
    WriteWithControl(LogString.c_str(), LogString.Length());
  }
  __finally
  {
    if (CriticalSection)
        CriticalSection->Release();
  }
}

void TLogClass::InsertEmptyString()
{
  if (!LogInit)
    return;
  if (!Enable)
    return;
  if (CriticalSection)
      CriticalSection->Acquire();
  try
  {
    AnsiString mess = "";
    _Write(mess);
  }
  __finally
  {
    if (CriticalSection)
        CriticalSection->Release();
  }
}

void TLogClass::WriteBuffer(BYTE* Buffer, int count)
{
  if (Buffer == NULL)
    return;
  if (!Enable)
    return;
  if (CriticalSection)
      CriticalSection->Acquire();
  try
  {
    SetLogName();
    if (!LogInit)
      return;
    LogFile->Seek(0,soFromEnd);
    AnsiString mess;
    for(int i=0;i<count;i++)
    {
      mess.sprintf("%02X ",Buffer[i]);
      WriteWithControl(mess.c_str(), mess.Length());
    }
    InsertEmptyString();
  }
  __finally
  {
    if (CriticalSection)
        CriticalSection->Release();
  }
}

void TLogClass::WriteLines(AnsiString Lines)
{
 TStringList* strings;
 try
 {
  char _subtext[1024];
  strings = new TStringList();
  strings->Clear();
  AnsiString delim = "\r\n";
  while(true)
  {
    int pos = Lines.Pos(delim);
    if (pos == 0)
      break;
    Lines = Lines.Delete(pos,2);
    Lines = Lines.Insert("?",pos);
  }
  delim = "?";
  while(true)
  {
    int pos = Lines.Pos(delim);
    if (pos == 0)
      break;
    AnsiString subtext = Lines.SubString(0,pos-1);
    Lines = Lines.SubString(pos+1,Lines.Length()-pos);
    if (!subtext.IsEmpty())
    {
      memset(_subtext,0,1024);
      strings->Add(AnsiString(_subtext));
    }
  }
  for(int i=0; i<strings->Count; i++)
    Write(strings->Strings[i]);
 }
 __finally
 {
   delete strings;
 }
}

void TLogClass::WriteInLine(AnsiString Lines)
{
    AnsiString delim = "\r\n";
    while(true)
    {
      int pos = Lines.Pos(delim);
      if (pos == 0)
        break;
      Lines = Lines.Delete(pos,2);
      Lines = Lines.Insert(" ",pos);
    }
    delim = "\n";
    while(true)
    {
      int pos = Lines.Pos(delim);
      if (pos == 0)
        break;
      Lines = Lines.Delete(pos,1);
      Lines = Lines.Insert(" ",pos);
    }
    Write(Lines);
}

void TLogClass::DisableLogging()
{
  Enable = false;
}

void TLogClass::EnableLogging()
{
  Enable = true;
}

void TLogClass::InsertVersionInfo(AnsiString version)
{
    Write("Version = "+version);
}

void TLogClass::WriteWithControl(const void *Buffer, int Count)
{
    if ((Count <= 0)||(Buffer == NULL)) return;
    int result = LogFile->Write(Buffer, Count);
    if (result == 0)
    {
        if(ErrorCallback)
            ErrorCallback();
    }
    else
        LastLineLength = DateLineLength + Count;
}

void TLogClass::DeleteLastLine()
{
    AnsiString delim = "\r\n";
    LogFile->Seek(0,soFromEnd);
    LogFile->Seek(-LastLineLength,soFromEnd);
    LogFile->Size = LogFile->Position;
}

int TLogClass::get_ref_count()
{
  int res = 0;

  if (CriticalSection)
      CriticalSection->Acquire();
  try
  {
    res = iref_count;
  }
  __finally
  {
    if (CriticalSection)
        CriticalSection->Release();
  }
  return res;
};

void TLogClass::set_ref_count(int new_ref_count)
{
  if (CriticalSection)
      CriticalSection->Acquire();
  try
  {
    iref_count = new_ref_count;
    //this->Write((ref_count == 0 ? AnsiString("!Log! I'm gonna die !!!!") : AnsiString("!Log! New ref_count is ")+AnsiString(ref_count)));
  }
  __finally
  {
    if (CriticalSection)
        CriticalSection->Release();
  }
}


#endif


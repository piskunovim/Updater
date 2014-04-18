//---------------------------------------------------------------------------


#pragma hdrstop

#include "TMD5Class.h"
#include "Unit1.h"
#include "md5.h"
int i;
//---------------------------------------------------------------------------

TMD5Class::TMD5Class()
{
Log = new TLogClass("TMD5Class");
if (Log)
       Log->Write("MD5 class started ...");
Form1->Memo2->Clear();
i=0;
}

TMD5Class::~TMD5Class()
{

}

void TMD5Class::GetFileList(LPTSTR sPath)
{
 //Log->Write("Start getting md5 of: "+AnsiString(sPath));

 WIN32_FIND_DATA pFILEDATA;

 HANDLE hFile = FindFirstFile(strcat(sPath,"\\*.*"),&pFILEDATA);

 sPath[strlen(sPath) - strlen(strstr(sPath,"*.*"))] = '\0';
 if (hFile!=INVALID_HANDLE_VALUE)    {

  char * chBuf;
  do {
   if (strlen(pFILEDATA.cFileName) == 1 &&  strchr(pFILEDATA.cFileName,'.') !=NULL)
    if (FindNextFile(hFile,&pFILEDATA) == 0)
      break;
   if (strlen(pFILEDATA.cFileName) == 2 && strstr(pFILEDATA.cFileName,"..") !=NULL)
    if(FindNextFile(hFile,&pFILEDATA) == 0)
      break;
     if(pFILEDATA.dwFileAttributes & FILE_ATTRIBUTE_DIRECTORY)
             {
                GetFileList(strcat(sPath,pFILEDATA.cFileName));
                sPath[strlen(sPath) - strlen(pFILEDATA.cFileName)-1] = '\0';
                Application->ProcessMessages();
    }

   else {

      strcat(sPath, pFILEDATA.cFileName);
      //Log->Write("MD5 ( "+AnsiString(sPath)+" ) " );
      GetSum(sPath);
      sPath[strlen(sPath) - strlen(pFILEDATA.cFileName)] = '\0';
   }
  }
  while (FindNextFile(hFile,&pFILEDATA));
 }
 FindClose(hFile);
}

void __fastcall TMD5Class::GetSum(char *FilePath)
{
  
 //Log->Write("GetSum start: "+AnsiString(FilePath));
  char *Buffer = NULL;
  TFileStream *PktFile = NULL;
        PktFile = new TFileStream( FilePath, fmOpenRead | fmShareDenyNone );
        if ( PktFile ){
	  Buffer = new char[ PktFile->Size ];
	  PktFile->ReadBuffer(Buffer, PktFile->Size );
          }

        int p=(int)(PktFile->Size);

        //if (p)
        //Log->Write("Start reading "+AnsiString(FilePath));

        String FileString(reinterpret_cast<char*>(Buffer), (int)(PktFile->Size));
        AnsiString MD5String = MD5(FileString);
        Application->ProcessMessages();
        Form1->Memo2->Lines->Add(MD5String+" *"+AnsiString(strstr(FilePath,"Webclient\\")));

      if ( PktFile ){
      delete PktFile;
      PktFile = NULL;}

      if ( Buffer ){
      delete[] Buffer;
      Buffer = NULL;}

}



//---------------------------------------------------------------------------

#pragma package(smart_init)

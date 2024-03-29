//---------------------------------------------------------------------------

#include <vcl.h>
#pragma hdrstop

#include "TProgressThread.h"
#include "Unit1.h"
#pragma package(smart_init)
//---------------------------------------------------------------------------

//   Important: Methods and properties of objects in VCL can only be
//   used in a method called using Synchronize, for example:
//
//      Synchronize(UpdateCaption);
//
//   where UpdateCaption could look like:
//
//      void __fastcall TProgressThread::UpdateCaption()
//      {
//        Form1->Caption = "Updated in a thread";
//      }
//---------------------------------------------------------------------------

__fastcall TProgressThread::TProgressThread(bool CreateSuspended)
        : TThread(CreateSuspended)
{
}
//---------------------------------------------------------------------------
void __fastcall TProgressThread::Execute()
{


}
//---------------------------------------------------------------------------


void TProgressThread::CountFiles(LPTSTR sCountPath)
{

 WIN32_FIND_DATA pFILEDATA;

 HANDLE hFile = FindFirstFile(strcat(sCountPath,"\\*.*"),&pFILEDATA);

 sCountPath[strlen(sCountPath) - strlen(strstr(sCountPath,"*.*"))] = '\0';
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

                CountFiles(strcat(sCountPath,pFILEDATA.cFileName));
     sCountPath[strlen(sCountPath) - strlen(pFILEDATA.cFileName)-1] = '\0';
   }

   else {
           count++;
           
        //TFolderCheck *FoCh = new TFolderCheck();
         //  Synchronize(TLabelProcess);
           //FoCh->ccount = 1 ;
   }
  }
  while (FindNextFile(hFile,&pFILEDATA));
 }
}

//-------------------------------------------------------------------------------------------
void __fastcall TProgressThread::TLabelProcess()
{
//Form1->Label11->Caption=count;
//TFolderCheck *FoCh = new TFolderCheck();
//Form1->ProgressBar1->Position=summary;
}
//-------------------------------------------------------------------------------------------

void TProgressThread::Result(int res)
{
 ShowMessage(AnsiString(res));
 while(res<=count){
                                 summary=(res*100)/count;
                                 Synchronize(&TLabelProcess);
        }
}

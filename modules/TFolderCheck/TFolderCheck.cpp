//---------------------------------------------------------------------------


#pragma hdrstop

#include <fstream.h>

#include "TFolderCheck.h"

typedef unsigned char BYTE;
long int rez= 0;


//---------------------------------------------------------------------------
TFolderCheck::TFolderCheck()
{
  Log=new TLogClass("TFolderCheck");
  FoLi=new TFolderList();
  BaUp=new TBackup();
 // CurBackUp=BaUp->BUDir();
  if (Log)
  {
        Log->Write("Module TFolderCheck initialised");
  }
}

TFolderCheck::~TFolderCheck()
{
replace=NULL;
}

//=============================================================================================
//           –екурсивно проходим по каталогу WebClient и по его подкаталогам
//=============================================================================================
void TFolderCheck::GetFileList(LPTSTR sPath, LPTSTR sExt, LPTSTR sEXT)
{

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
     //≈сли нашли директорию, запускаем в ней рекурсивный поиск
     if(pFILEDATA.dwFileAttributes & FILE_ATTRIBUTE_DIRECTORY)
             {             //если папка не €вл€етс€ исключением из списка

                GetFileList(strcat(sPath,pFILEDATA.cFileName), sExt, sEXT);
                //Log->Write(AnsiString(sPath));



        //else Log->Write("================= "+AnsiString(sPath)+" execution ============================= ");
               // GetFileList(strcat(sPath,pFILEDATA.cFileName), sExt, sEXT);

//¬останавливаем длину пути
     sPath[strlen(sPath) - strlen(pFILEDATA.cFileName)-1] = '\0';
    Application->ProcessMessages();
    }

   else {


    //ѕровер€ем на соотвествие sExt расширени€ pFILEDATA.cFileName
      //Log->Write(AnsiString(sPath)+AnsiString(pFILEDATA.cFileName));
       CheckFileExist(sPath, pFILEDATA.cFileName);

   }
  }
  while (FindNextFile(hFile,&pFILEDATA));
 }
}

//=============================================================================================
//      ѕроверка файла на наличие (имеем в виду, что может не существовать директории)
//=============================================================================================
void TFolderCheck::CheckFileExist(LPTSTR sPath, LPTSTR sFile)
{

char sUpdatePath[MAX_PATH]="C:\\WebClient\\";
Application->ProcessMessages();

int n;
        string *dirtxt=FoLi->ListFolder("toupdate");                     //???????? ?????, ??????? ?? ????? ????????
        //char *dbuf = new char[strlen(dirtxt[i].c_str())];
        char dbuf [MAX_PATH];
        for(int i=0;i<20;i++)
        {
        strcpy(dbuf,dirtxt[i].c_str());
		n=strlen(dbuf);
              //  Log->Write(dbuf);

        if (!n==0)
                if (strstr(sPath,dirtxt[i].c_str()))
                         {
	sUpdatePath[strlen(sUpdatePath)-1]='\0';
        strcat(sUpdatePath,strstr(sPath,dirtxt[i].c_str()));
  }
  }

  if (! ExceptionList(sPath))
  if (! FileExists(strcat(sUpdatePath,sFile)) )
                                 {      //  Log->Write("sPath : "+AnsiString(sPath));
                                      //  Log->Write("sUpdatePath : "+AnsiString(sUpdatePath));

                                        sUpdatePath[strlen(sUpdatePath)-strlen(strrchr(sUpdatePath,'\\'))]='\0';
                                        Log->Write("sUUUUPath : "+AnsiString(sUpdatePath));
                                        char mypath[MAX_PATH];
                                        strcpy(mypath,sUpdatePath);
                                        CheckFolder(mypath,0,0);
                                        strcat(sUpdatePath,"\\");
                                        strcat(sUpdatePath,sFile);
                                        strcat(sPath,sFile);



                                      // Log->Write("sFile : "+AnsiString(sFile));
                                      // Log->Write("sPath : "+AnsiString(sPath));
                                      // Log->Write("sUpdatePath : "+AnsiString(sUpdatePath));
                                      CopyFile(sPath,sUpdatePath,false);
                                      sPath[strlen(sPath) - strlen(sFile)] = '\0';     //восстанавливаем длину
                                      sUpdatePath[strlen(sUpdatePath) - strlen(sFile)] = '\0';



                                        //Log->Write("If file exists PATH - "+AnsiString(sPath));
                                       // Log->Write("If file exists sUpdatePath - "+AnsiString(sUpdatePath));
                                      //  }


                                 }
                      else
                      {
								
                                ReadingBinary(sUpdatePath,strcat(sPath,sFile));
                                sPath[strlen(sPath) - strlen(sFile)] = '\0';
                           //     rez++;
                               // Form1->Label10->Caption = rez;
                                }
                                
}

void __fastcall TFolderCheck::ReadingBinary(char *FilePath,char *FilePath2)
{
  replace=true;
  char *Buffer = NULL;
  char *Buffer2 = NULL;
  TFileStream *PktFile = NULL;
  TFileStream *PktFile2 = NULL;
        PktFile = new TFileStream( FilePath, fmOpenRead | fmShareDenyNone );
        PktFile2 = new TFileStream( FilePath2, fmOpenRead | fmShareDenyNone );
      if ( PktFile ){
	  Buffer = new char[ PktFile->Size ];
	  PktFile->ReadBuffer( Buffer, PktFile->Size );
          }
        if ( PktFile2 ){
	  Buffer2 = new char[ PktFile2->Size ];
	  PktFile2->ReadBuffer(Buffer2, PktFile2->Size );
          }

         if ( (int)(PktFile->Size)==(int)(PktFile2->Size) || (PktFile->Size ==0 && PktFile2->Size==0)){
         replace=false;
         int p=1000;
         if ( p >(int)(PktFile2->Size))
         {
         p=(int)(PktFile2->Size);
         }
        for (int i=0; i<p ;i++)
        {
          if (Buffer[i]==Buffer2[i])
                {
                 replace=false;
                }
          else  {
                 replace=true;
                 break;
                }

        }
}

      if ( PktFile ){
      delete PktFile;
      PktFile = NULL;}

    if ( PktFile2 ){
      delete PktFile2;
      PktFile = NULL;}

    if ( Buffer ){
      delete[] Buffer;
      Buffer = NULL;}

    if ( Buffer2 ){
      delete[] Buffer2;
      Buffer2 = NULL;}

    if (replace)
             {
             Log->Write("FilePath2 : "+AnsiString(FilePath2));
             Log->Write("FilePath  : "+AnsiString(FilePath));
             Log->Write("File old. Need to update ...");
          /*   string StrPath = FilePath;
             char str2[] = "C:\\DPSUpdate";
             StrPath.erase(0,strlen(str2));
             Log->Write(StrPath.c_str());
             char *mychar = new char[StrPath.length()+1];
             strcpy(mychar, StrPath.c_str());
             mychar[strlen(mychar)-strlen(strrchr(mychar,'\\'))]='\0';
             strcat(CurBackUp,mychar);
             Log->Write("Preready folder: "+AnsiString(CurBackUp));
             CheckFolder(CurBackUp,0,0);     */
             BUCopyFile(FilePath, CurBackUp);
             Log->Write("After folder: "+AnsiString(CurBackUp));
   //printf("pos: %d\n", strstr(str, "abc") - str);

             //Log->Write("Updating file ...");
             //DeleteFile(FilePath);

             CopyFile(FilePath2,FilePath,false);
             }
    else {
             Log->Write("FilePath  : "+AnsiString(FilePath));
             Log->Write("FilePath2 : "+AnsiString(FilePath2));
             Log->Write("Newest version of this file");
             }
replace = false;
}


#pragma package(smart_init)

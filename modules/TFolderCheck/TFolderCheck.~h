//---------------------------------------------------------------------------

#ifndef TFolderCheckH
#define TFolderCheckH

//---------------------------------------------------------------------------
#include "LogClass.h"
#include "TFolderList.h"
#include "TBackup.h"
//---------------------------------------------------------------------------
class TFolderCheck
{
 public:
       TFolderCheck::TFolderCheck();
       TFolderCheck::~TFolderCheck();
       void TFolderCheck::GetFileList(LPTSTR sPath, LPTSTR sExt, LPTSTR sEXT);
	   void TFolderCheck::CheckFileExist(LPTSTR sPath, LPTSTR sFile);
	   void TFolderCheck::CheckFolder(char *sPath, int mp, int i);
	   bool TFolderCheck::dirExists(char *DirExistenece);
           //ReadingBinary
           void __fastcall TFolderCheck::ReadingBinary(char *FilePath,char *FilePath2);
           bool __fastcall TFolderCheck::ExceptionList(LPTSTR checkPath);
           void TFolderCheck::BUCopyFile(char *FileToCopy,char *CurBackUp);

         //  string *TFolderCheck::DirFolder(int m);
           char *CurBackUp;
       TLogClass *Log;
       TFolderList *FoLi;
       TBackup *BaUp;

   char *arr[20];
   BYTE *fileBuf;			// ”казатель на буфер
   BYTE *fileBuf2;			// ”казатель на буфер 2
   FILE *file;		// ”казатель файла
   FILE *file2;		// ”казатель файла 2
   bool replace;
   int long rez;

};


//---------------------------------------------------------------------------
#endif

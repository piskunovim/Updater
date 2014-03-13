//---------------------------------------------------------------------------

#ifndef TBackupH
#define TBackupH
#include <ctime>
#include <iostream.h> 
#include "LogClass.h"

//---------------------------------------------------------------------------

class TBackup
{
        public:
                TBackup::TBackup();
                TBackup::~TBackup();
                char * TBackup::BUDir();
               // AnsiString TBackup::BUFolderPath();
                void TBackup::BUCopyFile(char *FileToCopy,char *CurBackUp);
                bool  TBackup::CheckFoldStruct(string FolderStruct);
               // void TBackup::mystrcat( char* s1, char* s2);
                TLogClass *Log;
             //   TFolderCheck *FoCh;

                AnsiString Backup;
                int bu;
                char CurDir[MAX_PATH]; //текущая дериктория (с которой запустили Updater)
};
//---------------------------------------------------------------------------
#endif

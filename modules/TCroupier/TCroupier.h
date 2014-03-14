//---------------------------------------------------------------------------

#ifndef TCroupierH
#define TCroupierH

#include <vcl.h>
#include <io.h>
#include <clx.h>
#include <stdlib.h>
#include <iostream.h>
#include <fstream.h>
#include <windows.h>
#include <stdio.h>
#include <sstream>
#include <iomanip>
#include "LogClass.h"

class TCroupier
{
          public:
                TCroupier::TCroupier();
                TCroupier::~TCroupier();
                void TCroupier::FileDistribution(LPTSTR sPath);     //проходимся по всем файлам папки и копируем из в директорию WebClient
                //void TCroupier::RestoreFolders(char *FolderStruct); // метод восстанавливающий дерево директорий
                void TCroupier::RestoreFolders(AnsiString FS);
                char *sPath;
                TLogClass *Log;
                char sExt[10];
                char sEXT[10];
};
//---------------------------------------------------------------------------
#endif

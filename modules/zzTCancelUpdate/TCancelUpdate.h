//---------------------------------------------------------------------------

#ifndef TCancelUpdateH
#define TCancelUpdateH
//---------------------------------------------------------------------------
#include <Classes.hpp>
#include <Classes.hpp>
#include "TFolderCheck.h"
#include "TFolderList.h"
#include "LogClass.h"
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
#include <tlhelp32.h>
//#include "UpdateThread.h"
//---------------------------------------------------------------------------
class TCancelUpdate : public TThread
{            
private:
protected:
        void __fastcall Execute();
public:
        __fastcall TCancelUpdate(bool CreateSuspended);
        void TCancelUpdate::StopProc(char *exeName);
        bool TCancelUpdate::StartProgram(AnsiString ApplicationName);
        void __fastcall TCancelUpdate::TStartBackUp();
        void TCancelUpdate::GetCancleFileList(LPTSTR sPath, LPTSTR sExt, LPTSTR sEXT);
//---------------------------------------------------------------------------
        TLogClass *Log;
//---------------------------------------------------------------------------
        FILE *file;		// ”казатель файла
        FILE *file2;		// ”казатель файла 2
        char sPath;
        bool replace;
        HANDLE UpdateHandle;
        DWORD UpdateProcessId;
        char *memblock;
        char sExt[10];
        char sEXT[10];
        char BackUpDir[MAX_PATH];
};
//---------------------------------------------------------------------------
#endif

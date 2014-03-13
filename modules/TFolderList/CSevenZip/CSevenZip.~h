//---------------------------------------------------------------------------

#ifndef CSevenZipH
#define CSevenZipH

#include "LogHolder.h"
//#include "common.h"

class CSevenZip
{
  CLogHolder Log;
  unsigned long ExecCmd(AnsiString CmdLine, AnsiString &Output, bool bSilentMode = false);
  AnsiString ArchiveFileName;
  unsigned long LastErrorCode;
public:

  CSevenZip(const AnsiString &_ArchiveFileName, TLogClass *_Log = NULL) : Log("CSevenZip", _Log)
    { LastErrorCode = 0; ArchiveFileName = _ArchiveFileName; };

  CSevenZip(const AnsiString &_ArchiveFileName, CLogHolder &_Log) : Log("CSevenZip", _Log)
    { LastErrorCode = 0; ArchiveFileName = _ArchiveFileName; };

  bool Test();
  AnsiString List();
  bool Extract(AnsiString OutDir = "");
  bool Compress(AnsiString FilesToCompress);
};

//---------------------------------------------------------------------------
#endif

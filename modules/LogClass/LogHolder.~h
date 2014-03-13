//---------------------------------------------------------------------------

#ifndef LogHolderH
#define LogHolderH
#include "LogClass.h"

class CLogHolder;
class CLogHolder
{
  TLogClass* Log;
  void DetachLog();
  void SetUp(AnsiString LogCaption, TLogClass* _Log = NULL);
public:
  CLogHolder() { Log = NULL; };
  CLogHolder(const AnsiString &LogCaption, TLogClass* _Log = NULL) { Log = NULL; SetUp(LogCaption, _Log); };
  CLogHolder(const AnsiString &LogCaption, CLogHolder &_Log) { Log = NULL; SetUp(LogCaption, _Log.get()); };
  CLogHolder(TLogClass* _Log) { Log = NULL; take(_Log); };
  void take(TLogClass* _Log = NULL);
  ~CLogHolder() { DetachLog(); };
  void operator = (const CLogHolder& ob);
  TLogClass* operator ->() { return Log; };
  TLogClass* get() { return Log; };
};

//---------------------------------------------------------------------------
#endif
 
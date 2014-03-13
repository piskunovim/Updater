//---------------------------------------------------------------------------


#pragma hdrstop

#include "LogHolder.h"

//---------------------------------------------------------------------------

void CLogHolder::DetachLog()
{
  if (Log)
  {
    Log->ref_count--;
    //Log->Write("Detached "+AnsiString(int(Log))+" : " + AnsiString(Log->ref_count));
    if (!Log->ref_count)
    {
      delete Log;
    }
    Log = NULL;
  }
}

//---------------------------------------------------------------------------

void CLogHolder::SetUp(AnsiString LogCaption, TLogClass* _Log)
{
  DetachLog();
  Log = _Log;
  if (Log)
    Log->ref_count++;
  else
  {
    Log = new TLogClass(LogCaption);
    //Log->Write("SetUp "+AnsiString(int(Log)));
  }
};

//---------------------------------------------------------------------------

void CLogHolder::operator = (const CLogHolder& ob)
{
  if ((&ob != this)&&(ob.Log))
  {
    DetachLog();
    Log = ob.Log;
    Log->ref_count++;
  }
};             

void CLogHolder::take(TLogClass* _Log)
{
  if (_Log)
  {
    DetachLog();
    Log = _Log;
  }
}


//---------------------------------------------------------------------------

#pragma package(smart_init)

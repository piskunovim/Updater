#ifndef LogClassH
#define LogClassH
#include <vcl.h>
#include <stdio.h>
#include <SyncObjs.hpp>

typedef void _fastcall (__closure *ErrorCallbackFunc)();

class TLogClass
{
private:
  TFileStream*  LogFile;
  AnsiString    _FileName;
  AnsiString    LogName;
  AnsiString    version;
  AnsiString    _Prefix;
  AnsiString    LogTemplate;
  AnsiString SubFolder;
  int Counter;
  bool LogInit;
  bool Enable;
  int DateLineLength;
  int LastLineLength;
  int iref_count;


  TCriticalSection* CriticalSection;

  void InitLog(AnsiString FileName);
  void _Write(AnsiString LogString);
  void WriteWithControl(const void *Buffer, int Count);

  int get_ref_count();
  void set_ref_count(int new_ref_count);

public:
  //void _fastcall (__closure *ErrorCallback)();
  ErrorCallbackFunc ErrorCallback;

  TLogClass(AnsiString Prefix = "log", AnsiString Version = "", ErrorCallbackFunc callback = NULL, AnsiString _SubFolder = "");
  ~TLogClass();
  void Write(AnsiString LogString);
  void Append(AnsiString LogString);
  void InsertEmptyString();
  void WriteBuffer(BYTE* Buffer, int count);
  void WriteLines(AnsiString Lines);
  void WriteInLine(AnsiString Lines);
  void InsertVersionInfo(AnsiString version);
  void DeleteLastLine();
  void SetLogName();

  void DisableLogging();
  void EnableLogging();
  __property int ref_count = { read=get_ref_count, write=set_ref_count};
};

#endif

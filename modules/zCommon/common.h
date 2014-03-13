//---------------------------------------------------------------------------

#ifndef commonH
#define commonH

//#define STANDALONE
//#define __USE_NEW_PACKETS__

#include <vcl.h>
#include <XMLDoc.hpp>

#include "LogClass.h"

template <class X> class xmlGuard
{
  X obj;
public:
  xmlGuard(const X& _object = NULL) : obj(_object) {};
  ~xmlGuard() { /*if (obj) obj.Release();*/ };
  X operator->() { return obj; };
  X get() { return obj; };
  xmlGuard& operator= (const X& C)
    {
    /*if (Assigned())
      obj.Release();*/
    obj = C;
    return *this;
    };
  bool Assigned() { return (obj != NULL); };
};

  //AnsiString ShowError(AnsiString Header, int ErrorCode = -1);
  //AnsiString StripFileName(AnsiString FullName);
  AnsiString GetFileName(AnsiString FullName);
  AnsiString GetFileExt(AnsiString FullName);
  AnsiString GetPath(AnsiString FullName);
  AnsiString xChangeFileExt(AnsiString FileName, AnsiString NewExt);
  double GetDouble(AnsiString);
  bool IsDouble(AnsiString);
  bool isInteger(AnsiString Src);
  int GetInt(AnsiString);
  long GetLong(AnsiString);
  TDateTime GetDateTime(AnsiString);
  AnsiString ChangeChars(AnsiString Source, AnsiString OldChars, AnsiString NewChars);
  AnsiString RemoveSubStrings(AnsiString Source, AnsiString StartChars, AnsiString EndChars);
  AnsiString GetSubString(AnsiString Source, AnsiString StartChars, AnsiString EndChars);

  //AnsiString ChangeChars2(AnsiString Source, AnsiString OldChars, AnsiString NewChars);
  AnsiString TruncateLocation(AnsiString _fileName);

  bool StoreStringToFile(AnsiString FileName, AnsiString Content, TLogClass* Log = NULL);
  bool GetFileData(AnsiString FileName, AnsiString &Content, TLogClass* Log = NULL);

  int FileCount(AnsiString FileMask);
  AnsiString TransLit(AnsiString InString);
  AnsiString GetUTCDateTimeString(TDateTime DT);
  AnsiString GetHEXString(AnsiString S, AnsiString Delimiter);

/*  bool AddTextNode(xmlGuard <_di_IXMLNode> &Parent, AnsiString Name, AnsiString Text);
  bool GetNodeText(xmlGuard <_di_IXMLNode> &Parent, AnsiString Name, AnsiString &Text, bool bNoThrow = false);
  bool isNodeExists(xmlGuard <_di_IXMLNode> &Parent, AnsiString Name);
  void CheckNode(xmlGuard <_di_IXMLNode> &Node, AnsiString Name);*/

//  bool TestArchiveFile(AnsiString SourceFileName, bool Is7ZExeFound, TLogClass* Log = NULL);
  bool DeleteDir(AnsiString DirName, TLogClass *Log = NULL);
  AnsiString GetHex(int in);

//---------------------------------------------------------------------------
#endif



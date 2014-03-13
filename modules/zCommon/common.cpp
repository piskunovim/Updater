//---------------------------------------------------------------------------


#include <vcl.h>
#include <memory>
#include <vector>
#pragma hdrstop

#include "common.h"
//#include "SevenZipVCL.hpp"
#include "showerror.h"
//#include "CSevenZip.h"

#pragma package(smart_init)

const bool cNoThrow = true;

//---------------------------------------------------------------------------

AnsiString xChangeFileExt(AnsiString FileName, AnsiString NewExt)
{
  char path_buf[_MAX_PATH];
  char drive[_MAX_DRIVE];
  char dir[_MAX_DIR];
  char fname[_MAX_FNAME];
  char fext[_MAX_EXT];

  _splitpath(FileName.c_str(),drive,dir,fname,fext);
  _makepath (path_buf,drive,dir,fname,NewExt.c_str());
  return AnsiString(path_buf);
}

//---------------------------------------------------------------------------

AnsiString GetFileName(AnsiString FullName)
{
  char path_buf[_MAX_PATH];
  char drive[_MAX_DRIVE];
  char dir[_MAX_DIR];
  char fname[_MAX_FNAME];
  char fext[_MAX_EXT];

  _splitpath(FullName.c_str(),drive,dir,fname,fext);
  return AnsiString(fname);
}

AnsiString GetFileExt(AnsiString FullName)
{
  char path_buf[_MAX_PATH];
  char drive[_MAX_DRIVE];
  char dir[_MAX_DIR];
  char fname[_MAX_FNAME];
  char fext[_MAX_EXT];

  _splitpath(FullName.c_str(),drive,dir,fname,fext);
  AnsiString Ext = AnsiString(fext);
  return Ext.SubString(2,Ext.Length());
}
//---------------------------------------------------------------------------

AnsiString GetPath(AnsiString FullName)
{
        char path_buf[_MAX_PATH];
        char drive[_MAX_DRIVE];
        char dir[_MAX_DIR];
        char fname[_MAX_FNAME];
        char fext[_MAX_EXT];

//        ::GetModuleFileName(NULL,path_buf,sizeof path_buf);
        _splitpath(FullName.c_str(),drive,dir,fname,fext);
//        _makepath (path_buf,0,0,0,0);
        return AnsiString(drive)+AnsiString(dir);
}

//---------------------------------------------------------------------------

/*AnsiString ChangeChars(AnsiString Source, AnsiString OldChars, AnsiString NewChars)
{
  AnsiString Temp;
  try
  {
    Temp=Source;
    while (Temp.Pos(OldChars)>0)
    {
      Temp=Temp.SubString(0,Temp.Pos(OldChars)-1)+NewChars+Temp.SubString(Temp.Pos(OldChars)+OldChars.Length(),Temp.Length());
    }
  }
  catch (...)
        {
  }
 return Temp;
}*/

//---------------------------------------------------------------------------

AnsiString GetSubString(AnsiString Source, AnsiString StartChars, AnsiString EndChars)
{
  AnsiString Temp;
  try
  {
    if ((Source.Pos(StartChars))&&(Source.Pos(EndChars)))
    {
      Temp = Source.SubString(0,Source.Pos(EndChars)-1);
      Temp = Temp.SubString(Temp.Pos(StartChars)+StartChars.Length(),Temp.Length());
    }
  }
  catch (...)
        {
  }
  return Temp;
}

//---------------------------------------------------------------------------
AnsiString RemoveSubStrings(AnsiString Source, AnsiString StartChars, AnsiString EndChars)
{
  AnsiString Temp;
  try
  {
    //Temp=Source;
    while ((Source.Pos(StartChars))&&(Source.Pos(EndChars)))
    {
      Temp += Source.SubString(0, Source.Pos(StartChars)-1);
      Source = Source.SubString(Source.Pos(StartChars)+StartChars.Length(), Source.Length());
      Source = Source.SubString(Source.Pos(EndChars)+EndChars.Length(), Source.Length());
    }
    Temp += Source;
  }
  catch (...)
        {
  }
  return Temp;
}

//---------------------------------------------------------------------------

AnsiString ChangeChars(AnsiString Source, AnsiString OldChars, AnsiString NewChars)
{
  AnsiString Temp;
  try
  {
    //Temp=Source;
    while (Source.Pos(OldChars))
    {
      Temp += Source.SubString(0, Source.Pos(OldChars)-1)+NewChars;
      Source = Source.SubString(Source.Pos(OldChars)+OldChars.Length(), Source.Length());
    }
    Temp += Source;
  }
  catch (...)
        {
  }
  return Temp;
}

//---------------------------------------------------------------------------


double GetDouble(AnsiString Source)
{
  if (Source=="")
    return 0;
  else
  {
    try
    {
      try
      {
        return ChangeChars(Source, ".", ",").ToDouble();
      }
      catch (...)
      {
        return ChangeChars(Source, ",", ".").ToDouble();
      }
    }
    catch (Exception &exception)
    {
      return 0;
    }
  }
}

//---------------------------------------------------------------------------

bool IsDouble(AnsiString Source)
{
try
  {
        try
                {
                ChangeChars(Source, ".", ",").ToDouble();
                return true;
                }
        catch (...)
                {
                ChangeChars(Source, ",", ".").ToDouble();
                return true;
                }
        }
catch (Exception &exception)
        {
//        Log->Write("Exception in GetDouble(A): "+exception.Message);
        return false;
  }
}

//---------------------------------------------------------------------------

TDateTime GetDateTime(AnsiString Source)
{
try
  {
  return TDateTime(Source);
  }
catch (Exception &exception)
  {
  //Log->Write("Exception in GetDateTime(A): "+exception.Message);
  return 0;
  }
}

//---------------------------------------------------------------------------
bool isInteger(AnsiString Src)
{
  try
  {
    Src.ToInt();
    return true;
  }
  catch (EConvertError&)
  {
    return false;
  }
}

int GetInt(AnsiString Source)
{
try
  {
  Source = Source.Trim();

  if ((Source.LowerCase()=="no")||(Source==""))
    return 0;
    else
    if (Source.LowerCase()=="yes")
      return 1;
      else
      return Source.ToInt();
  }
catch (Exception &exception)
  {
  //Log->Write("Exception in GetInt(A): "+exception.Message);
  return 0;
        }
}

//---------------------------------------------------------------------------

long GetLong(AnsiString Source)
{
try
  {
  if ((Source.LowerCase()=="no")||(Source==""))
    return 0;
    else
    if (Source.LowerCase()=="yes")
      return 1;
      else
      return StrToInt64(Source);
  }
catch (Exception &exception)
  {
  //Log->Write("Exception in GetLong(A): "+exception.Message);
  return 0;
        }
}

//---------------------------------------------------------------------------

AnsiString TruncateLocation(AnsiString _fileName)
{
AnsiString Temp;
try
  {
  AnsiString Temp;
  Temp=_fileName;
  while ((Temp.Pos("/")!=0)&&(Temp.Pos("/")<Temp.Pos(".htm")))
    Temp.Delete(1,Temp.Pos("/"));
  return Temp;
  }
catch (Exception &exception)
  {
  //log->Write("Exception in TruncateFileName: "+exception.Message);
  return Temp;
  }
}

bool StoreStringToFile(AnsiString FileName, AnsiString Content, TLogClass* Log)
{
  bool bRes = false;
  try
  {
    std::auto_ptr <TFileStream> OutFile;
    if (FileExists(FileName))
    {
      std::auto_ptr <TFileStream> OutFileTemp(new TFileStream(FileName, fmOpenReadWrite | fmShareDenyNone));
      OutFile = OutFileTemp;
    }
    else
    {
      std::auto_ptr <TFileStream> OutFileTemp(new TFileStream(FileName, fmCreate));
      OutFile = OutFileTemp;
    }
    //DeleteFile(FileName);
    //std::auto_ptr<TFileStream> OutFile(new TFileStream(FileName, fmCreate));
//    OutFile->Size = 0;
    OutFile->Seek(0, soFromBeginning);
    OutFile->Write(Content.c_str(), Content.Length());
    OutFile->Size=Content.Length();
    OutFile.reset(NULL);
    bRes=true;
  }
  catch (Exception &ex)
  {
    if (Log) Log->Write("Exception occured while saving "+FileName+" file: "+ex.Message);
  }
  return bRes;
}

bool GetFileData(AnsiString FileName, AnsiString &Content, TLogClass* Log)
{
  try
  {
    std::auto_ptr<TFileStream> InFile(new TFileStream(FileName, fmOpenRead|fmShareDenyNone));
    std::vector<char> Buffer( InFile->Size+1, 0 );
    InFile->Seek(0, soFromBeginning);
    InFile->Read(&*Buffer.begin(), InFile->Size);
    Content = AnsiString(&*Buffer.begin(), InFile->Size);
    InFile.reset(NULL);
    return true;
  }
  catch (Exception &ex)
  {
    if (Log) Log->Write("Exception occured while loading "+FileName+" file: "+ex.Message);
    return false;
  }
}

int FileCount(AnsiString FileMask)
{
int FCount = 0;
try
  {
  TSearchRec sr;
  int iAttributes = 0;
  if (FindFirst(FileMask, iAttributes, sr) == 0)
    {
    do
      {
      FCount++;
      } while (FindNext(sr) == 0);
    FindClose(sr);
    }
  return FCount;
  }
catch (...)
  {
  return -1;
  }
}

AnsiString TransLit(AnsiString InString)
{
static char *s1[] = {
"", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
"", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/",
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?",
"@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
"P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "\\", "]", "^", "_",
"`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "~", "",
"", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
"", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
"", "", "", "", "", "", "", "", "JO", "", "", "", "", "", "", "",
"", "", "", "", "", "", "", "", "jo", "", "", "", "", "", "", "",
"A", "B", "V", "G", "D", "E", "ZH", "Z", "I", "JJ", "K", "L", "M", "N", "O", "P",
"R", "S", "T", "U", "F", "KH", "C", "CH", "SH", "SHH", "", "Y", "'", "JE", "JU", "JA",
"a", "b", "v", "g", "d", "e", "zh", "z", "i", "jj", "k", "l", "m", "n", "o", "p",
"r", "s", "t", "u", "f", "kh", "c", "ch", "sh", "shh", "", "y", "'", "je", "ju", "ja"
};

AnsiString Res;
try
  {
  for(int i=0;i<InString.Length();i++)
    Res += s1[(unsigned char)InString.c_str()[i]];
  }
catch (...)
  {
  }
return Res;
}


AnsiString GetUTCDateTimeString(TDateTime DT)
{
TIME_ZONE_INFORMATION TZInfo;
int TZRes = GetTimeZoneInformation(&TZInfo);
long Bias;
switch (TZRes)
  {
  case TIME_ZONE_ID_UNKNOWN:   //The operating system cannot determine the current time zone. This is usually because a previous call to the SetTimeZoneInformation function supplied only the bias (and no transition dates).
    Bias = TZInfo.Bias;
    break;
  case TIME_ZONE_ID_STANDARD:  //The operating system is operating in the range covered by the StandardDate member of the structure pointed to by the lpTimeZoneInformation parameter.
    Bias = TZInfo.Bias + TZInfo.StandardBias;
    break;
  case TIME_ZONE_ID_DAYLIGHT:
    Bias = TZInfo.Bias + TZInfo.DaylightBias;
    break;
  }
//DT = DT+float(Bias)/24/60;
enum TStringFloatFormat {sffGeneral, sffExponent, sffFixed, sffNumber, sffCurrency };
AnsiString GMTstring = AnsiString(" GMT")+(Bias<=0 ? "+" : "-")+AnsiString(float((abs(Bias)))/60);
//AnsiString UTC = AnsiString("GMT")+(Bias<=0 ? "+" : "-")+AnsiString::FloatToStrF(float(abs(Bias)/60),sffFixed,1,1);
return DT.FormatString("dd.mm.yyyy hh:nn:ss") + GMTstring;
}

/*bool AddTextNode(xmlGuard <_di_IXMLNode> &Parent, AnsiString Name, AnsiString Text)
{
  xmlGuard<_di_IXMLNode>NewNode(Parent->AddChild(Name));
  if (!NewNode.Assigned())
    throw Exception((AnsiString)"Error creating <"+Name+"> node!");

  NewNode->Text = Text;

  return true;
}

bool GetNodeText(xmlGuard <_di_IXMLNode> &Parent, AnsiString Name, AnsiString &Text, bool bNoThrow)
{
  Text = "";

  xmlGuard <_di_IXMLNodeList> ParentNDL (Parent->GetChildNodes());
  if (!ParentNDL.Assigned())
  {
    //if (bNoThrow)
      return false;
    //else
    //  throw Exception((AnsiString)"Error getting parent nodelist for <"+Name+"> node!");
  }


  xmlGuard <_di_IXMLNode> Node (ParentNDL->FindNode(Name));
  if (!Node.Assigned())
  {
    //if (bNoThrow)
      return false;
    //else
    //  throw Exception((AnsiString)"Node <"+Name+"> not found!");
  }

  if (Node->IsTextElement)
  {
    Text = Node->NodeValue.VOleStr;
  }

  return true;
}

bool isNodeExists(xmlGuard <_di_IXMLNode> &Parent, AnsiString Name)
{
  xmlGuard <_di_IXMLNodeList> ParentNDL (Parent->GetChildNodes());
  if (!ParentNDL.Assigned())
    return false;

  xmlGuard <_di_IXMLNode> Node (ParentNDL->FindNode(Name));
  if (!Node.Assigned())
    return false;

  return true;
}

void CheckNode(xmlGuard <_di_IXMLNode> &Node, AnsiString Name)
{
  if (!Node.Assigned())
    throw Exception((AnsiString)"Node <"+Name+"> not found!");
} */

AnsiString GetHEXString(AnsiString S, AnsiString Delimiter)
{
AnsiString AHex;
for (int i = 1; i <= S.Length(); i++){
    AHex += IntToHex((unsigned char)S[i], 2) + Delimiter;
                }
return AHex;
}

/*bool TestArchiveFile(AnsiString SourceFileName, bool Is7ZExeFound, TLogClass *Log)
{
  try
  {
    if (Is7ZExeFound)
    {
      Log->Append("(using 7z.exe)...");
      std::auto_ptr <CSevenZip> SvnZip (new CSevenZip(SourceFileName, Log));
      bool bResult = SvnZip->Test();
      if (bResult)
      {
        if (Log) Log->Write("Testing archive file "+SourceFileName+" error!");
      }
      return bResult;
    }
    else
    { */
      /*Log->Append("(using 7za.dll)...");
      std::auto_ptr <TSevenZip> SZ ( new TSevenZip(NULL) );
      SZ->SZFileName=SourceFileName;
      SZ->Files->Clear();
      SZ->Extract(true);
      if (SZ->ErrCode==0)
      {
        return true;
      }
      else
      {
        if (Log) Log->Write("Testing archive file "+SourceFileName+" error #"+AnsiString(SZ->ErrCode)+"!");
      }*/
    /*}
  }
  catch (Exception &exception)
  {
                if (Log) Log->Write("Exception occured in THTTPGetFileThread::StoreSendCommandProcessedTemp: "+exception.Message);
  }
  return false;
} */

bool DeleteDir(AnsiString DirName, TLogClass *Log)
{
  if (Log) Log->Write("Deleting "+DirName+"...");
  char From[255];
  ZeroMemory(&From, sizeof(From));
  strcat(From,DirName.c_str());
  strcat(From,"\0\0");
  SHFILEOPSTRUCT op;
  ZeroMemory(&op, sizeof(op));
  op.hwnd = NULL;
  op.wFunc = FO_DELETE;
  op.pFrom = From;
  op.fFlags = FOF_NOCONFIRMATION|FOF_NOCONFIRMMKDIR|FOF_NOERRORUI|FOF_SILENT;
  if (!SHFileOperation(&op))
  {
    if (Log) Log->Append(" OK.");
    return true;
  }
  else
  {
    if (Log) Log->Append(ShowError(" Error! "));
    return false;
  }
}

AnsiString GetHex(int in)
{
  char sTemp[11] = "";
  sprintf(sTemp, "0x%08X", in);
  return AnsiString(sTemp);
}

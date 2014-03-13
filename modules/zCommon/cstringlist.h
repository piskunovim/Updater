#ifndef CStringListH
#define CStringListH

#include <vector>
#include <dstring.h>
#include <IdURI.hpp>
#include "common.h"

using namespace std;

const DoTrim = true;

//---------------------------------------------------------------------------

class CStringList
{
protected:
  AnsiString ReadDelimitedString()
  {
    AnsiString Temp;
    for (unsigned i = 0; i< Strings.size(); i++)
    {
      Temp += (i>0 ? Delimiter : AnsiString("")) + (bTrim ? Strings[i].Trim() : Strings[i]);
    }
    return Temp;
  }

  void WriteDelimitedString (AnsiString _DelimitedString)
  {
    Strings.clear();
    _DelimitedString += Delimiter;
    while (_DelimitedString.Pos(Delimiter)>0)
    {
      AnsiString StringPart = _DelimitedString.SubString(0,_DelimitedString.Pos(Delimiter)-1);
      Strings.push_back( bTrim ? StringPart.Trim() : StringPart);
      _DelimitedString = _DelimitedString.SubString(_DelimitedString.Pos(Delimiter)+Delimiter.Length(),_DelimitedString.Length());
    }
  }
  AnsiString EmptyStr;
  bool bTrim;
public:
  CStringList() { Delimiter = ","; bTrim = false; };
  CStringList( const AnsiString &_DelimitedString, const AnsiString &_Delimiter, bool _bTrim = false) { Delimiter = _Delimiter; DelimitedString = _DelimitedString; bTrim = _bTrim; };
  AnsiString& operator[](unsigned i) { if (i<Strings.size()) return Strings[i]; else {EmptyStr=""; return EmptyStr;} } ;
  __property AnsiString DelimitedString = { read=ReadDelimitedString, write=WriteDelimitedString };
  AnsiString Delimiter;
  vector <AnsiString> Strings;
  unsigned size() {return Strings.size(); };
};

//---------------------------------------------------------------------------

class parameter : private CStringList
{
  AnsiString ReadName() { if(valid()) return Strings[0]; else return ""; }
  AnsiString ReadValue() { if(valid()) return Strings[1]; else return ""; }
  void WriteName( const AnsiString &Val) { if(valid()) Strings[0] = Val; }
  void WriteValue( const AnsiString &Val) { if(valid()) Strings[1] = Val; }
public:
  parameter(): CStringList("", "=", DoTrim) {};
  parameter(const AnsiString &paramString): CStringList(paramString, "=", DoTrim) {};
  parameter(const AnsiString &Name, const AnsiString &Value): CStringList(Name+"="+Value, "=", DoTrim) {};
  parameter& operator= (const parameter& C)
  {
        if (this != &C)
        {
          Name = C.Name;
          Value = C.Value;
        }
        return *this;
  };
  __property AnsiString Name = { read=ReadName, write=WriteName };
  __property AnsiString Value = { read=ReadValue, write=WriteValue };
  AnsiString AsString() { return ReadDelimitedString(); };
  bool valid() { return size()==2; };
};

//---------------------------------------------------------------------------

class CParamsList
{
  AnsiString ReadDelimitedString()
  {
    AnsiString Temp;
    for (unsigned i = 0; i< Items.size(); i++)
      Temp += (i>0 ? Delimiter + Items[i].AsString() : Items[i].AsString());
    return Temp;
  }

  void WriteDelimitedString (AnsiString _DelimitedString)
  {
    Items.clear();
    _DelimitedString += Delimiter;
    while (_DelimitedString.Pos(Delimiter)>0)
    {
      parameter temp_param(_DelimitedString.SubString(0,_DelimitedString.Pos(Delimiter)-1));
      if (temp_param.valid())
        Items.push_back(temp_param);
      _DelimitedString = _DelimitedString.SubString(_DelimitedString.Pos(Delimiter)+Delimiter.Length(),_DelimitedString.Length());
    }
  }

  parameter& getParameter(const AnsiString &NameToFind)
  {
    if (!this->hasParameter(NameToFind))
      this->Items.push_back(parameter(NameToFind,""));

    return this->operator [](ParameterIdx(NameToFind));
  };

  vector <parameter> Items;
  bool bCaseSensitive;

public:
  CParamsList() { Delimiter = ","; bCaseSensitive = false; }
  CParamsList(const AnsiString &_DelimitedString, const AnsiString &_Delimiter=",") { Delimiter = _Delimiter; DelimitedString = _DelimitedString;  bCaseSensitive = false; }
//  CParamsList() {}
  parameter& operator[](unsigned i) { if (i<Items.size()) return Items[i];}
  parameter& operator[](const AnsiString &Name) {return getParameter(Name);}
  CParamsList& operator= (const CParamsList& C)
  {
    if (this != &C)
    {
      Items = C.Items;
      Delimiter = C.Delimiter;
    }
    return *this;
  };
  __property AnsiString DelimitedString = { read=ReadDelimitedString, write=WriteDelimitedString };
  AnsiString Delimiter;
  CParamsList& setDelimiter(const AnsiString &newDelimiter) { Delimiter = newDelimiter; return *this; };

  void clear() { Items.clear(); };

  bool hasParameter(const AnsiString &NameToFind) { return ParameterIdx(NameToFind) != -1; }

  int ParameterIdx(const AnsiString &NameToFind)
  {
    for (unsigned i = 0; i <size(); i++)
    {
      if (((bCaseSensitive)&&(Items[i].Name == NameToFind))||((!bCaseSensitive)&&(Items[i].Name.LowerCase() == NameToFind.LowerCase())))
        return i;
    }
    return -1;
  }

  CParamsList& DeleteParameter(AnsiString Name)
  {
    vector <parameter>::iterator it = Items.begin();
    while ( it != Items.end() ) {
      if ( it->Name == Name ) {
        it = Items.erase(it);
      } else {
        ++it;
      }
    }
    return *this;
  }

  unsigned size() {return Items.size(); }

  CParamsList& CaseSensitive() { bCaseSensitive = true; return *this; }
  CParamsList& CaseInsensitive() { bCaseSensitive = false; return *this; }

  CParamsList& URLDecodeValues()
  {
    for (UINT Pnum = 0; Pnum<Items.size(); Pnum++)
    {
      Items[Pnum].Value = TIdURI::URLDecode(NULL,Items[Pnum].Value);
      //Parameters->Values[Parameters->Names[Pnum]] = TIdURI::URLDecode(NULL,Parameters->Values[Parameters->Names[Pnum]]);
    }
    return *this;
  };

  CParamsList& xChangeChars(AnsiString OldStr, AnsiString NewStr)
  {
    for (unsigned Pnum = 0; Pnum<Items.size(); Pnum++)
    {
      Items[Pnum].Name = ::ChangeChars(Items[Pnum].Name,OldStr,NewStr);
      Items[Pnum].Value = ::ChangeChars(Items[Pnum].Value,OldStr,NewStr);
      //Parameters->Values[Parameters->Names[Pnum]] = TIdURI::URLDecode(NULL,Parameters->Values[Parameters->Names[Pnum]]);
    }
    return *this;
  };

};

//---------------------------------------------------------------------------

#endif

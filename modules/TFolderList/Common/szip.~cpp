#include "szip.h"
//#include "SevenZipVCL.hpp"
//#include "showerror.h"
#include "CSevenZip.h"
#include <memory>

#pragma package(smart_init)


bool TestArchiveFile(AnsiString SourceFileName, bool Is7ZExeFound, CLogHolder &Log)
{
  try
  {
    if (Is7ZExeFound)
    {
      std::auto_ptr <CSevenZip> SvnZip (new CSevenZip(SourceFileName, Log));
      bool bResult = SvnZip->Test();
      if (!bResult)
      {
        if (Log.get()) Log->Write("Testing archive file "+SourceFileName+" (using 7z.exe) error!");
      }
      return bResult;
    }
    /*else
    {
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
        if (Log.get()) Log->Write("Testing archive file "+SourceFileName+" (using 7za.dll) error #"+AnsiString(SZ->ErrCode)+"!");
      }
    }*/
  }
  catch (Exception &exception)
  {
                if (Log.get()) Log->Write("Exception occured in TestArchiveFile: "+exception.Message);
  }
  return false;
}


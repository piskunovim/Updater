//---------------------------------------------------------------------------

#ifndef TMD5ClassH
#define TMD5ClassH
#include "LogClass.h"
//---------------------------------------------------------------------------

class TMD5Class{
  public:
        TMD5Class::TMD5Class();
        TMD5Class::~TMD5Class();
        void TMD5Class::GetFileList(LPTSTR sPath);
        void __fastcall TMD5Class::GetSum(char *FilePath);
        TLogClass *Log;
};
//---------------------------------------------------------------------------

#endif
 
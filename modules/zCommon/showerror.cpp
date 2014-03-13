//---------------------------------------------------------------------------


#include <SysUtils.hpp>
#pragma hdrstop

#include "showerror.h"

#pragma package(smart_init)

//---------------------------------------------------------------------------

AnsiString ShowError(AnsiString Header, int ErrorCode)
{
  LPVOID lpMsgBuf = NULL;
  AnsiString Temp;
  try
  {
    try
    {
      if (ErrorCode!=-1)
        ErrorCode = GetLastError();
      if (ErrorCode!=0)
      {
        FormatMessage(FORMAT_MESSAGE_ALLOCATE_BUFFER | FORMAT_MESSAGE_FROM_SYSTEM,NULL,ErrorCode,MAKELANGID(LANG_NEUTRAL, SUBLANG_DEFAULT),(LPTSTR) &lpMsgBuf,0,NULL);
        Temp=Header+": "+AnsiString(ErrorCode)+" "+AnsiString((char*)lpMsgBuf);
      }
    }
    catch (Exception &exception)
    {
      Temp = "Exception in ShowError: "+exception.Message;
    }
  }
  __finally
  {
    if (lpMsgBuf)
      LocalFree(lpMsgBuf);
    return Temp;
  }
}

//---------------------------------------------------------------------------

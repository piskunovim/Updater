//---------------------------------------------------------------------------

#ifndef TMOperationH
#define TMOperationH
#include "LogClass.h"
//---------------------------------------------------------------------------

class TMOperation{

   public:
        TMOperation::TMOperation();
        TMOperation::~TMOperation();
        String *TMOperation::Delete(String array[], int position);
        String *TMOperation::Add();
        TLogClass *Log;

};
#endif
 
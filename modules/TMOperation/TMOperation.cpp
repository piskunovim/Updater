//---------------------------------------------------------------------------


#pragma hdrstop

#include "TMOperation.h"

//---------------------------------------------------------------------------

#pragma package(smart_init)

TMOperation::TMOperation()
{
Log= new TLogClass("TMOperation");
if (Log)
        Log->Write("TMOperation initialize ...");
}

TMOperation::~TMOperation()
{
delete Log;
}


//---------------------------------------------------------------------------
//                      �������� ��������� ������� 
//---------------------------------------------------------------------------
String *TMOperation::Delete(String array[], int position)
{
int n = sizeof(array);

if ( position >= n+1 )
      Log->Write("�������� ����������... ");
else
   {
    Log->Write("�������� "+AnsiString(array[position]));
    for ( int c = position - 1 ; c < n - 1 ; c++ )
        {
        Log->Write(AnsiString(position));
        array[c] = array[c+1];
        }
    }
   return array;
}
//---------------------------------------------------------------------------
//                      �������� ������� � ������
//---------------------------------------------------------------------------
String *TMOperation::Add()
{
//
}

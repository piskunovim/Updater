//---------------------------------------------------------------------------

#include <vcl.h>
#pragma hdrstop

#include "TimerThread.h"
#include "Unit1.h"
#pragma package(smart_init)
//---------------------------------------------------------------------------

//   Important: Methods and properties of objects in VCL can only be
//   used in a method called using Synchronize, for example:
//
//      Synchronize(UpdateCaption);
//
//   where UpdateCaption could look like:
//
//      void __fastcall TThreadTimer::UpdateCaption()
//      {
//        Form1->Caption = "Updated in a thread";
//      }
//---------------------------------------------------------------------------

__fastcall TThreadTimer::TThreadTimer(bool CreateSuspended) //������ ��������� ������(���� �� ���������� ������� - ����������)
        : TThread(CreateSuspended)
{
Log = new TLogClass("TimerThread");
  if (Log)
        Log->Write("��������� ������� ...");
Log->Write("���� ��������� ������ ���������� ...");  //���� ����� ���������� ���������� � ���� ���������� �������� - ������� ������
TCaUp = new TCancelUpdate(true);
timecount=0;
timecountmin=0;
}
//---------------------------------------------------------------------------
void __fastcall TThreadTimer::Execute()
{
Sleep(2000);
for (int i=0; i<5400; i++)
{
        Sleep(1000);
        timecount++;
if (timecount>=0 && timecount<10)
        outtime="0"+AnsiString(timecount);
else if (timecount>=10 && timecount<60)
        outtime=AnsiString(timecount);
else if (timecount>=60)
        {
        timecountmin++;
        timecount=0;
        outtime="0"+AnsiString(timecount);
}

if (timecountmin>=0 && timecountmin<10)
        outtimemin="0"+AnsiString(timecountmin);
else if (timecountmin>=10)
        outtimemin=AnsiString(timecountmin);

        Synchronize(&ShowTimer);
}

Synchronize(OutTimer);

}
//---------------------------------------------------------------------------

void __fastcall TThreadTimer::OutTimer()
{
Log->Write("��������� ������, ����� �������� ������� ...");
Log->Write("������ ���������� ���������");
Log->Write("��������������� ��������� ������� ����������");
TCaUp->Resume();
}

void __fastcall TThreadTimer::ShowTimer()
{
 Form1->Label2->Caption=outtimemin;
 Form1->Label3->Caption=outtime;
}

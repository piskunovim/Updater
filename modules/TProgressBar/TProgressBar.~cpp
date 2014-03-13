//---------------------------------------------------------------------------

#include <vcl.h>
#pragma hdrstop

#include "TProgressBar.h"
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
//      void __fastcall TProgressBar::UpdateCaption()
//      {
//        Form1->Caption = "Updated in a thread";
//      }
//---------------------------------------------------------------------------

__fastcall TProgressBar::TProgressBar(bool CreateSuspended)
        : TThread(CreateSuspended)
{

}
//---------------------------------------------------------------------------
void __fastcall TProgressBar::Execute()
{
Pos=0; //заполненость прогрессбара
OnePercent=0;
}

void __fastcall TProgressBar::FillProgressBar(int Position){
Synchronize(&GetProgressBarSize);  //получаем данные о нашем прогрессбаре
        Pos=Position*OnePercent;   //узнаем смещение относительно начала(путь который прошли)
	Synchronize(&ProgressBar); //заполняем прогрессбар на Pos пикселей
        Synchronize(&Percent);     //выводим сколько % прогрессбара заполнили
}

void __fastcall TProgressBar::GetProgressBarSize(){
 ProgressBarFull = Form1->ProgressBarSize;     //полная ширина прогрессбара
 OnePercent = ProgressBarFull/100;             //один процент ширины прогрессбара
}

void __fastcall TProgressBar::ProgressBar(){
   Form1->Image3->Width=Pos;
}

void __fastcall TProgressBar::Percent(){
Form1->Label1->Caption = AnsiString(Form1->Image3->Width*100/Form1->Image1->Width)+"%";
}

void __fastcall TProgressBar::ProgressBarFinish(){
Form1->Image3->Width=ProgressBarFull;
Form1->Label1->Caption = "100%";
}

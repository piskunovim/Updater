//---------------------------------------------------------------------------

#include <vcl.h>
#pragma hdrstop

#include "TAdvert.h"
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
//      void __fastcall TAdvert::UpdateCaption()
//      {
//        Form1->Caption = "Updated in a thread";
//      }
//---------------------------------------------------------------------------

__fastcall TAdvert::TAdvert(bool CreateSuspended)
        : TThread(CreateSuspended)
{
timetochange=0;
progress=0;
changeimg=0;
img_num=1;
}
//---------------------------------------------------------------------------
void __fastcall TAdvert::Execute()
{
Synchronize(&Update);
for (timetochange=0; timetochange<=7; timetochange++)
{
Sleep(1000);
if (timetochange >= 6) {
        progress=0;
        timetochange=0;
        Synchronize(&NewImg);
        Synchronize(&NewAdvert);
        while (progress<=1100)
        {
        progress+=50;
        Synchronize(&AdvertChange);
        Sleep(100);
        }
        Synchronize(&AdvertChanged);
        }
}
}
//---------------------------------------------------------------------------
//              Выводим вперед новое  объявление 
//---------------------------------------------------------------------------
void __fastcall TAdvert::NewAdvert()
{
if (changeimg == 0){
    Form1->Image6->BringToFront();
    changeimg=1;
}
else if (changeimg == 1){
    Form1->Image5->BringToFront();
    changeimg=0;
}

}


//------------------------------------------------------------------
//              Новая картинка для объявления
//------------------------------------------------------------------

void __fastcall TAdvert::NewImg(){
if(img_num >= Form1->ImageCount) {img_num=0;}

if (changeimg == 0){
    Form1->Image6->Picture->LoadFromFile(Form1->picked[img_num]);
}
else if (changeimg == 1){
    Form1->Image5->Picture->LoadFromFile(Form1->picked[img_num]);
}
img_num++;
}

//---------------------------------------------------------------------------
//              "Анимируем" выезжание картинки
//---------------------------------------------------------------------------

void __fastcall TAdvert::AdvertChange()
{
if (changeimg == 0){
    Form1->Image5->Width=progress;
    }
else if(changeimg == 1){
    Form1->Image6->Width=progress;
    }
}

//---------------------------------------------------------------------------
//     На случай если картинка выведется не полностью. Выводим ее до конца:
//---------------------------------------------------------------------------
void __fastcall TAdvert::AdvertChanged() {
if (changeimg == 0){
        Form1->Image5->Width=1100;
        }
else if (changeimg == 1){
        Form1->Image6->Width=1100;
        }
}

void __fastcall TAdvert::Update(){
Form1->Update();
}

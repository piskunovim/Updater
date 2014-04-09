//---------------------------------------------------------------------------

#include <vcl.h>
#pragma hdrstop

#include "Unit1.h"
#include <jpeg.hpp>
//---------------------------------------------------------------------------
#pragma package(smart_init)
#pragma resource "*.dfm"
TForm1 *Form1;
int i;
//---------------------------------------------------------------------------
__fastcall TForm1::TForm1(TComponent* Owner)
        : TForm(Owner)
{
  TStringList *img=new TStringList;
  GetCurrentDirectory(MAX_PATH, CurDir); //инициализаци€ текущей директории
  AnsiString ImageDir = AnsiString(CurDir)+"\\adv"; //папка рекламы
  if (DirectoryExists(ImageDir))  //провер€ем существует ли папка с картинками дл€ рекламы (рекомендуемое разрешение 1100*353)
  {
       Label2->Visible=false; //убираем часы из зоны видимости
       Label3->Visible=false;
       Label4->Visible=false;
       Label5->Visible=false;
       Shape1->Visible=false;
       Shape2->Visible=false; //часы убраны

       TSearchRec sr;
       AnsiString ImageSearch = AnsiString(CurDir)+"\\adv\\*.jpg";
       int done = FindFirst(ImageSearch, faAnyFile, sr );
               while(!done) {
                       img->Add(sr.Name);
                       done = FindNext(sr);
                       }
       FindClose(sr);

       ImageCount=img->Count;//сохран€ем количество картинок

       for (int k=0; k<img->Count; k++)  //наш массив картинок  (объ€влени€)
        {
          picked[k] = AnsiString(CurDir)+"\\adv\\"+img->Strings[k];
        }
       Image5->Picture->LoadFromFile(AnsiString(picked[0]));  //и тут же загружаем первую


       TAd = new TAdvert(true);                   //после всего запускаем поток, который будем показывать рекламу
       TAd->Resume();
   }
   else {
         //вместо рекламы покажем часы
         Shape1->Left=Form1->Width-828;
         Shape2->Left=Form1->Width-828;
         Label2->Left=Form1->Width-824;
         Label3->Left=Form1->Width-532;
         Label4->Left=Form1->Width-558;
         Label5->Left=Form1->Width-616;
         Image5->Visible=false;
         Image6->Visible=false;
         Label2->Visible=true;
         Label3->Visible=true;
         Label4->Visible=true;
         Label5->Visible=true;
         Shape1->Visible=true;
         Shape2->Visible=true;

   }




  ProgressBarSize = Form1->Width - 640;     //расположение элементов на форме
  Image1->Width = ProgressBarSize;
  Image3->Width = Form1->Width - 640;
  Label1->Left = Form1->Width/2+20;
  Label1->Caption = "0%";
  Image6->Width = 0;
  Image3->Parent->DoubleBuffered=true;     //дл€ того, чтобы не мерцало
  Image5->Parent->DoubleBuffered=true;
  Image6->Parent->DoubleBuffered=true;

  Main = new TMain(true);                      //основные операции выполн€ютс€ в этом потоке
  TPb = new TProgressBar(true);               //прогрессбар
  ThTi = new TThreadTimer(true);            //таймер ожидани€ выполнени€ обновлени€
  Main->Resume();
  TPb->Resume();
  ThTi -> Resume();
}
//---------------------------------------------------------------------------
//        ƒл€ разного разрешени€ экрана подгон€ем масштаб
//---------------------------------------------------------------------------
void __fastcall TForm1::FormResize(TObject *Sender)
{
 ProgressBarSize = Form1->Width - 640;
 Image1->Width = ProgressBarSize;
 Image3->Width = 0;
 Label1->Left = Form1->Width/2+20;
 Application->ProcessMessages();
}
//---------------------------------------------------------------------------




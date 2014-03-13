//---------------------------------------------------------------------------

#ifndef Unit1H
#define Unit1H
//---------------------------------------------------------------------------
#include <Classes.hpp>
#include <Controls.hpp>
#include <StdCtrls.hpp>
#include <Forms.hpp>
#include <ExtCtrls.hpp>
#include <jpeg.hpp>
#include <Buttons.hpp>
#include "TMain.h"
#include "TAdvert.h"
#include "TProgressBar.h"
#include <IdBaseComponent.hpp>
#include <IdComponent.hpp>
#include <IdFTP.hpp>
#include <IdTCPClient.hpp>
#include <IdTCPConnection.hpp>
#include "TimerThread.h"

#define TBitmap Graphics::TBitmap
//---------------------------------------------------------------------------
class TForm1 : public TForm
{
__published:	// IDE-managed Components
        TImage *Image2;
        TImage *Image1;
        TImage *Image3;
        TImage *Image4;
        TLabel *Label1;
        TImage *Image5;
        TImage *Image6;
        TIdFTP *idFTP;
        TMemo *Memo1;
        TMemo *Memo2;
        TLabel *Label2;
        TLabel *Label3;
        TLabel *Label4;
        TShape *Shape1;
        TShape *Shape2;
        TLabel *Label5;
        void __fastcall FormResize(TObject *Sender);
private:	// User declarations
public:		// User declarations
        __fastcall TForm1(TComponent* Owner);
        int GetImgList(AnsiString Path);
        int ProgressBarSize;
        char CurDir[MAX_PATH]; //текущая дериктория (с которой запустили Updater)
        TProgressBar *TPb;
        TAdvert *TAd;
        TMain *TStartMain;
        String picked[10];
        TMain *Main;
        TThreadTimer *ThTi; //если обновление не выполнится за отведенное время - восстановим последнюю удачную версию
        TStringList *img;  //список картинок для рекламы
        AnsiString ImageDir; //папка картинок для рекламы
        int ImageCount;
};
//---------------------------------------------------------------------------
extern PACKAGE TForm1 *Form1;
//---------------------------------------------------------------------------
#endif

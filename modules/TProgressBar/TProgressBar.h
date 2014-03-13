//---------------------------------------------------------------------------

#ifndef TProgressBarH
#define TProgressBarH
//---------------------------------------------------------------------------
#include <Classes.hpp>
//---------------------------------------------------------------------------
class TProgressBar : public TThread
{            
private:
protected:
        void __fastcall Execute();
public:
        __fastcall TProgressBar(bool CreateSuspended);
        void __fastcall TProgressBar::GetProgressBarSize();
        void __fastcall TProgressBar::ProgressBar();
        void __fastcall TProgressBar::Percent();
        void __fastcall TProgressBar::ProgressBarFinish();
		void __fastcall TProgressBar::FillProgressBar(int Position);
        double ProgressBarFull, Pos, OnePercent;

};
//---------------------------------------------------------------------------
#endif

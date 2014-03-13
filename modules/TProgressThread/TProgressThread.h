//---------------------------------------------------------------------------

#ifndef TProgressThreadH
#define TProgressThreadH
//---------------------------------------------------------------------------
#include <Classes.hpp>
//---------------------------------------------------------------------------
class TProgressThread : public TThread
{            
private:
protected:
        void __fastcall Execute();
public:
        __fastcall TProgressThread(bool CreateSuspended);
        void TProgressThread::CountFiles(LPTSTR sCountPath);
        void TProgressThread::Result(int res);
        void __fastcall TProgressThread::TLabelProcess();
        long int count;
        int summary;
        int res;
};
//---------------------------------------------------------------------------
#endif

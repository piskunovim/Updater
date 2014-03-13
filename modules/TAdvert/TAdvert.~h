//---------------------------------------------------------------------------

#ifndef TAdvertH
#define TAdvertH
//---------------------------------------------------------------------------
#include <Classes.hpp>
#include "LogClass.h"
//---------------------------------------------------------------------------
class TAdvert : public TThread
{            
private:
protected:
        void __fastcall Execute();
public:
        __fastcall TAdvert(bool CreateSuspended);
        void __fastcall TAdvert::AdvertChange();
        void __fastcall TAdvert::AdvertChanged();
        void __fastcall TAdvert::NewAdvert();
        void __fastcall TAdvert::NewImg();
        void __fastcall TAdvert::Update();
        int timetochange, progress, img_num, changeimg, img_count;
//---------------------------------------------------------------------------
        TLogClass *Log;
};
//---------------------------------------------------------------------------
#endif

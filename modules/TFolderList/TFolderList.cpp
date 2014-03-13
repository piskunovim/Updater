//---------------------------------------------------------------------------


#pragma hdrstop

#include "TFolderList.h"


//---------------------------------------------------------------------------

TFolderList::TFolderList()
{
xmlCfg = NULL;
Log = new TLogClass("TFolderList");
if (Log)
        {
       Log->Write("==============Folder list====");
         Log->Write("Ready . . . ");
        }
}

TFolderList::~TFolderList()
{
}

string *TFolderList::ListFolder(AnsiString upflag)              //построчно считываем из txt
{

 int m=0;
 string s;
 string* arr = new string[20];
 string* arr2 = new string[20];
 AnsiString xmlstring;
                ifstream input("C:\\WebClient\\config\\config.xml");
                while (getline(input, s))
                        {
                        if(!s.length())
                        {
                                 break;
                        }
                         xmlstring=xmlstring+s.c_str();
                         }
xmlCfg = LoadXMLData(xmlstring);
IXMLNode *nodRoot = xmlCfg->DocumentElement;

if (upflag == "toupdate")  {
IXMLNode *nodElement = nodRoot->ChildNodes->FindNode(L"toupdate");
IXMLNodeList *ufolders = nodElement->ChildNodes;
IXMLNode *nodSubElement = nodElement->ChildNodes->FindNode(L"ufolder");

for (int i=1;i<=ufolders->Count;i++){
        if( nodSubElement == NULL )
                Log->Write("|toupdate| : There is no node with that name");
        else if( nodSubElement != NULL )
                {
                String ufolder = nodSubElement->NodeValue;
                //AnsiString ufolder = nodSubElement->NodeValue;
                arr[m]=ufolder.c_str();
                //ShowMessage(nodSubElement->NodeValue);
                m++;
                }
                nodSubElement=nodSubElement->NextSibling();
                }
 for (int i=0; i<=ufolders->Count; i++)
 Log->Write(arr[i].c_str());
 m=0;
 return arr;
}

else if (upflag == "notupdate")  {
IXMLNode *nodElement = nodRoot->ChildNodes->FindNode(L"notupdate");
IXMLNodeList *ufolders = nodElement->ChildNodes;
IXMLNode *nodSubElement = nodElement->ChildNodes->FindNode(L"nfolder");

for (int i=1;i<=ufolders->Count;i++){
        if( nodSubElement == NULL )
                Log->Write("|notupdate| : There is no node with that name");
        else if( nodSubElement != NULL )
                {
                //ShowMessage(nodSubElement->NodeValue);
                String nfolder = nodSubElement->NodeValue;
                arr2[m] = nfolder.c_str();
                m++;
                }
                nodSubElement=nodSubElement->NextSibling();
                }
 for (int i=0; i<=ufolders->Count; i++)
 Log->Write(arr2[i].c_str());
 m=0;
 return arr2;
}

}


#pragma package(smart_init)

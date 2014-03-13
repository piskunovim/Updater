#pragma once

#ifndef SCOPEDLOCKSH
#define SCOPEDLOCKSH

//#include "log.h"

class CSScopedLock
{
	CRITICAL_SECTION* workCS;
public:
	CSScopedLock(CRITICAL_SECTION* _workCS)
		: workCS(_workCS)
	{
		if (workCS)
			::EnterCriticalSection(workCS);
	}
	~CSScopedLock()
	{
		if (workCS)
			::LeaveCriticalSection(workCS);
	}
};

class MutexScopedLock
{
	HANDLE hSMutex;
	DWORD dwWaitResult;
public:
	MutexScopedLock(HANDLE& _hSMutex, bool bNoWait = false)
		: dwWaitResult(-1)

	{
		hSMutex = _hSMutex;
		if ((hSMutex)&&(!bNoWait))
			dwWaitResult = WaitForSingleObject(hSMutex, INFINITE);	
	}
	~MutexScopedLock()
	{
		if ((hSMutex)&&(WAIT_OBJECT_0 == dwWaitResult))
			ReleaseMutex(hSMutex);
	}
	inline DWORD getWaitResult()
	{
		return dwWaitResult;
	}
};

//#endif

#endif
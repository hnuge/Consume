#pragma once

#include "il2cpp-config.h"

#ifndef _MSC_VER
# include <alloca.h>
#else
# include <malloc.h>
#endif

#include <stdint.h>

#include "UnityEngine_UnityEngine_MonoBehaviour1158329972.h"

// UnityEngine.GameObject
struct GameObject_t1756533147;




#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Winvalid-offsetof"
#pragma clang diagnostic ignored "-Wunused-variable"
#endif

// coinscript
struct  coinscript_t1508277802  : public MonoBehaviour_t1158329972
{
public:
	// UnityEngine.GameObject coinscript::coin
	GameObject_t1756533147 * ___coin_2;
	// UnityEngine.GameObject coinscript::square
	GameObject_t1756533147 * ___square_3;

public:
	inline static int32_t get_offset_of_coin_2() { return static_cast<int32_t>(offsetof(coinscript_t1508277802, ___coin_2)); }
	inline GameObject_t1756533147 * get_coin_2() const { return ___coin_2; }
	inline GameObject_t1756533147 ** get_address_of_coin_2() { return &___coin_2; }
	inline void set_coin_2(GameObject_t1756533147 * value)
	{
		___coin_2 = value;
		Il2CppCodeGenWriteBarrier(&___coin_2, value);
	}

	inline static int32_t get_offset_of_square_3() { return static_cast<int32_t>(offsetof(coinscript_t1508277802, ___square_3)); }
	inline GameObject_t1756533147 * get_square_3() const { return ___square_3; }
	inline GameObject_t1756533147 ** get_address_of_square_3() { return &___square_3; }
	inline void set_square_3(GameObject_t1756533147 * value)
	{
		___square_3 = value;
		Il2CppCodeGenWriteBarrier(&___square_3, value);
	}
};

#ifdef __clang__
#pragma clang diagnostic pop
#endif

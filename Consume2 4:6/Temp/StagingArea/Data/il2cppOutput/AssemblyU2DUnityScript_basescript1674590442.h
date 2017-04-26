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
// UnityEngine.GameObject[,]
struct GameObjectU5BU2CU5D_t3057952155;
// tilescript
struct tilescript_t4226655977;




#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Winvalid-offsetof"
#pragma clang diagnostic ignored "-Wunused-variable"
#endif

// basescript
struct  basescript_t1674590442  : public MonoBehaviour_t1158329972
{
public:
	// UnityEngine.GameObject basescript::prefab
	GameObject_t1756533147 * ___prefab_2;
	// UnityEngine.GameObject[,] basescript::cells
	GameObjectU5BU2CU5D_t3057952155* ___cells_3;
	// System.Single basescript::rows
	float ___rows_4;
	// System.Single basescript::columns
	float ___columns_5;
	// tilescript basescript::ts
	tilescript_t4226655977 * ___ts_6;

public:
	inline static int32_t get_offset_of_prefab_2() { return static_cast<int32_t>(offsetof(basescript_t1674590442, ___prefab_2)); }
	inline GameObject_t1756533147 * get_prefab_2() const { return ___prefab_2; }
	inline GameObject_t1756533147 ** get_address_of_prefab_2() { return &___prefab_2; }
	inline void set_prefab_2(GameObject_t1756533147 * value)
	{
		___prefab_2 = value;
		Il2CppCodeGenWriteBarrier(&___prefab_2, value);
	}

	inline static int32_t get_offset_of_cells_3() { return static_cast<int32_t>(offsetof(basescript_t1674590442, ___cells_3)); }
	inline GameObjectU5BU2CU5D_t3057952155* get_cells_3() const { return ___cells_3; }
	inline GameObjectU5BU2CU5D_t3057952155** get_address_of_cells_3() { return &___cells_3; }
	inline void set_cells_3(GameObjectU5BU2CU5D_t3057952155* value)
	{
		___cells_3 = value;
		Il2CppCodeGenWriteBarrier(&___cells_3, value);
	}

	inline static int32_t get_offset_of_rows_4() { return static_cast<int32_t>(offsetof(basescript_t1674590442, ___rows_4)); }
	inline float get_rows_4() const { return ___rows_4; }
	inline float* get_address_of_rows_4() { return &___rows_4; }
	inline void set_rows_4(float value)
	{
		___rows_4 = value;
	}

	inline static int32_t get_offset_of_columns_5() { return static_cast<int32_t>(offsetof(basescript_t1674590442, ___columns_5)); }
	inline float get_columns_5() const { return ___columns_5; }
	inline float* get_address_of_columns_5() { return &___columns_5; }
	inline void set_columns_5(float value)
	{
		___columns_5 = value;
	}

	inline static int32_t get_offset_of_ts_6() { return static_cast<int32_t>(offsetof(basescript_t1674590442, ___ts_6)); }
	inline tilescript_t4226655977 * get_ts_6() const { return ___ts_6; }
	inline tilescript_t4226655977 ** get_address_of_ts_6() { return &___ts_6; }
	inline void set_ts_6(tilescript_t4226655977 * value)
	{
		___ts_6 = value;
		Il2CppCodeGenWriteBarrier(&___ts_6, value);
	}
};

#ifdef __clang__
#pragma clang diagnostic pop
#endif

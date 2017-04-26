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

// enemy
struct  enemy_t1088778788  : public MonoBehaviour_t1158329972
{
public:
	// UnityEngine.GameObject enemy::enemy
	GameObject_t1756533147 * ___enemy_2;
	// System.Int32 enemy::count
	int32_t ___count_3;
	// System.Single enemy::r
	float ___r_4;
	// System.Int32 enemy::move
	int32_t ___move_5;
	// System.Boolean enemy::paused
	bool ___paused_6;

public:
	inline static int32_t get_offset_of_enemy_2() { return static_cast<int32_t>(offsetof(enemy_t1088778788, ___enemy_2)); }
	inline GameObject_t1756533147 * get_enemy_2() const { return ___enemy_2; }
	inline GameObject_t1756533147 ** get_address_of_enemy_2() { return &___enemy_2; }
	inline void set_enemy_2(GameObject_t1756533147 * value)
	{
		___enemy_2 = value;
		Il2CppCodeGenWriteBarrier(&___enemy_2, value);
	}

	inline static int32_t get_offset_of_count_3() { return static_cast<int32_t>(offsetof(enemy_t1088778788, ___count_3)); }
	inline int32_t get_count_3() const { return ___count_3; }
	inline int32_t* get_address_of_count_3() { return &___count_3; }
	inline void set_count_3(int32_t value)
	{
		___count_3 = value;
	}

	inline static int32_t get_offset_of_r_4() { return static_cast<int32_t>(offsetof(enemy_t1088778788, ___r_4)); }
	inline float get_r_4() const { return ___r_4; }
	inline float* get_address_of_r_4() { return &___r_4; }
	inline void set_r_4(float value)
	{
		___r_4 = value;
	}

	inline static int32_t get_offset_of_move_5() { return static_cast<int32_t>(offsetof(enemy_t1088778788, ___move_5)); }
	inline int32_t get_move_5() const { return ___move_5; }
	inline int32_t* get_address_of_move_5() { return &___move_5; }
	inline void set_move_5(int32_t value)
	{
		___move_5 = value;
	}

	inline static int32_t get_offset_of_paused_6() { return static_cast<int32_t>(offsetof(enemy_t1088778788, ___paused_6)); }
	inline bool get_paused_6() const { return ___paused_6; }
	inline bool* get_address_of_paused_6() { return &___paused_6; }
	inline void set_paused_6(bool value)
	{
		___paused_6 = value;
	}
};

#ifdef __clang__
#pragma clang diagnostic pop
#endif

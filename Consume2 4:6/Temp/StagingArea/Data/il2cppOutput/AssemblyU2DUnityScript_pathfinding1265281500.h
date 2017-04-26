#pragma once

#include "il2cpp-config.h"

#ifndef _MSC_VER
# include <alloca.h>
#else
# include <malloc.h>
#endif

#include <stdint.h>

#include "UnityEngine_UnityEngine_MonoBehaviour1158329972.h"

// UnityEngine.Transform
struct Transform_t3275118058;




#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Winvalid-offsetof"
#pragma clang diagnostic ignored "-Wunused-variable"
#endif

// pathfinding
struct  pathfinding_t1265281500  : public MonoBehaviour_t1158329972
{
public:
	// UnityEngine.Transform pathfinding::target
	Transform_t3275118058 * ___target_2;
	// System.Int32 pathfinding::moveSpeed
	int32_t ___moveSpeed_3;
	// UnityEngine.Transform pathfinding::myTransform
	Transform_t3275118058 * ___myTransform_4;

public:
	inline static int32_t get_offset_of_target_2() { return static_cast<int32_t>(offsetof(pathfinding_t1265281500, ___target_2)); }
	inline Transform_t3275118058 * get_target_2() const { return ___target_2; }
	inline Transform_t3275118058 ** get_address_of_target_2() { return &___target_2; }
	inline void set_target_2(Transform_t3275118058 * value)
	{
		___target_2 = value;
		Il2CppCodeGenWriteBarrier(&___target_2, value);
	}

	inline static int32_t get_offset_of_moveSpeed_3() { return static_cast<int32_t>(offsetof(pathfinding_t1265281500, ___moveSpeed_3)); }
	inline int32_t get_moveSpeed_3() const { return ___moveSpeed_3; }
	inline int32_t* get_address_of_moveSpeed_3() { return &___moveSpeed_3; }
	inline void set_moveSpeed_3(int32_t value)
	{
		___moveSpeed_3 = value;
	}

	inline static int32_t get_offset_of_myTransform_4() { return static_cast<int32_t>(offsetof(pathfinding_t1265281500, ___myTransform_4)); }
	inline Transform_t3275118058 * get_myTransform_4() const { return ___myTransform_4; }
	inline Transform_t3275118058 ** get_address_of_myTransform_4() { return &___myTransform_4; }
	inline void set_myTransform_4(Transform_t3275118058 * value)
	{
		___myTransform_4 = value;
		Il2CppCodeGenWriteBarrier(&___myTransform_4, value);
	}
};

#ifdef __clang__
#pragma clang diagnostic pop
#endif

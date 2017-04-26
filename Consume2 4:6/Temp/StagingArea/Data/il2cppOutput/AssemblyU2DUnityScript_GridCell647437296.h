#pragma once

#include "il2cpp-config.h"

#ifndef _MSC_VER
# include <alloca.h>
#else
# include <malloc.h>
#endif

#include <stdint.h>

#include "mscorlib_System_Object2689449295.h"
#include "UnityEngine_UnityEngine_Color2020392075.h"





#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Winvalid-offsetof"
#pragma clang diagnostic ignored "-Wunused-variable"
#endif

// GridCell
struct  GridCell_t647437296  : public Il2CppObject
{
public:
	// UnityEngine.Color GridCell::color
	Color_t2020392075  ___color_0;
	// System.Boolean GridCell::filling
	bool ___filling_1;

public:
	inline static int32_t get_offset_of_color_0() { return static_cast<int32_t>(offsetof(GridCell_t647437296, ___color_0)); }
	inline Color_t2020392075  get_color_0() const { return ___color_0; }
	inline Color_t2020392075 * get_address_of_color_0() { return &___color_0; }
	inline void set_color_0(Color_t2020392075  value)
	{
		___color_0 = value;
	}

	inline static int32_t get_offset_of_filling_1() { return static_cast<int32_t>(offsetof(GridCell_t647437296, ___filling_1)); }
	inline bool get_filling_1() const { return ___filling_1; }
	inline bool* get_address_of_filling_1() { return &___filling_1; }
	inline void set_filling_1(bool value)
	{
		___filling_1 = value;
	}
};

#ifdef __clang__
#pragma clang diagnostic pop
#endif

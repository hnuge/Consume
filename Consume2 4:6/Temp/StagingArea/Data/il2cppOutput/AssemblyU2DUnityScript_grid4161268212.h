#pragma once

#include "il2cpp-config.h"

#ifndef _MSC_VER
# include <alloca.h>
#else
# include <malloc.h>
#endif

#include <stdint.h>

#include "UnityEngine_UnityEngine_MonoBehaviour1158329972.h"

// GridCell[,]
struct GridCellU5BU2CU5D_t726845010;
// UnityEngine.Renderer
struct Renderer_t257310565;




#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Winvalid-offsetof"
#pragma clang diagnostic ignored "-Wunused-variable"
#endif

// grid
struct  grid_t4161268212  : public MonoBehaviour_t1158329972
{
public:
	// System.Int32 grid::width
	int32_t ___width_2;
	// System.Int32 grid::height
	int32_t ___height_3;
	// GridCell[,] grid::cells
	GridCellU5BU2CU5D_t726845010* ___cells_4;
	// System.Single grid::cellSize
	float ___cellSize_5;
	// UnityEngine.Renderer grid::bound
	Renderer_t257310565 * ___bound_6;

public:
	inline static int32_t get_offset_of_width_2() { return static_cast<int32_t>(offsetof(grid_t4161268212, ___width_2)); }
	inline int32_t get_width_2() const { return ___width_2; }
	inline int32_t* get_address_of_width_2() { return &___width_2; }
	inline void set_width_2(int32_t value)
	{
		___width_2 = value;
	}

	inline static int32_t get_offset_of_height_3() { return static_cast<int32_t>(offsetof(grid_t4161268212, ___height_3)); }
	inline int32_t get_height_3() const { return ___height_3; }
	inline int32_t* get_address_of_height_3() { return &___height_3; }
	inline void set_height_3(int32_t value)
	{
		___height_3 = value;
	}

	inline static int32_t get_offset_of_cells_4() { return static_cast<int32_t>(offsetof(grid_t4161268212, ___cells_4)); }
	inline GridCellU5BU2CU5D_t726845010* get_cells_4() const { return ___cells_4; }
	inline GridCellU5BU2CU5D_t726845010** get_address_of_cells_4() { return &___cells_4; }
	inline void set_cells_4(GridCellU5BU2CU5D_t726845010* value)
	{
		___cells_4 = value;
		Il2CppCodeGenWriteBarrier(&___cells_4, value);
	}

	inline static int32_t get_offset_of_cellSize_5() { return static_cast<int32_t>(offsetof(grid_t4161268212, ___cellSize_5)); }
	inline float get_cellSize_5() const { return ___cellSize_5; }
	inline float* get_address_of_cellSize_5() { return &___cellSize_5; }
	inline void set_cellSize_5(float value)
	{
		___cellSize_5 = value;
	}

	inline static int32_t get_offset_of_bound_6() { return static_cast<int32_t>(offsetof(grid_t4161268212, ___bound_6)); }
	inline Renderer_t257310565 * get_bound_6() const { return ___bound_6; }
	inline Renderer_t257310565 ** get_address_of_bound_6() { return &___bound_6; }
	inline void set_bound_6(Renderer_t257310565 * value)
	{
		___bound_6 = value;
		Il2CppCodeGenWriteBarrier(&___bound_6, value);
	}
};

#ifdef __clang__
#pragma clang diagnostic pop
#endif

#include "il2cpp-config.h"

#ifndef _MSC_VER
# include <alloca.h>
#else
# include <malloc.h>
#endif

#include <cstring>
#include <string.h>
#include <stdio.h>
#include <cmath>
#include <limits>
#include <assert.h>

#include "class-internals.h"
#include "codegen/il2cpp-codegen.h"
#include "AssemblyU2DUnityScript_GridCell647437296.h"
#include "AssemblyU2DUnityScript_grid4161268212.h"
#include "AssemblyU2DUnityScript_pathfinding1265281500.h"
#include "AssemblyU2DUnityScript_pickcolor3008228408.h"
#include "AssemblyU2DUnityScript_savecolor1487029836.h"
#include "AssemblyU2DUnityScript_squarescript3380826768.h"
#include "AssemblyU2DUnityScript_tilescript4226655977.h"
#include "AssemblyU2DUnityScript_title1707147050.h"







#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Winvalid-offsetof"
#pragma clang diagnostic ignored "-Wunused-variable"
#endif
extern const Il2CppTypeDefinitionSizes g_typeDefinitionSize1700 = { sizeof (GridCell_t647437296), -1, 0, 0 };
extern const int32_t g_FieldOffsetTable1700[2] = 
{
	GridCell_t647437296::get_offset_of_color_0(),
	GridCell_t647437296::get_offset_of_filling_1(),
};
extern const Il2CppTypeDefinitionSizes g_typeDefinitionSize1701 = { sizeof (grid_t4161268212), -1, 0, 0 };
extern const int32_t g_FieldOffsetTable1701[5] = 
{
	grid_t4161268212::get_offset_of_width_2(),
	grid_t4161268212::get_offset_of_height_3(),
	grid_t4161268212::get_offset_of_cells_4(),
	grid_t4161268212::get_offset_of_cellSize_5(),
	grid_t4161268212::get_offset_of_bound_6(),
};
extern const Il2CppTypeDefinitionSizes g_typeDefinitionSize1702 = { sizeof (pathfinding_t1265281500), -1, 0, 0 };
extern const int32_t g_FieldOffsetTable1702[3] = 
{
	pathfinding_t1265281500::get_offset_of_target_2(),
	pathfinding_t1265281500::get_offset_of_moveSpeed_3(),
	pathfinding_t1265281500::get_offset_of_myTransform_4(),
};
extern const Il2CppTypeDefinitionSizes g_typeDefinitionSize1703 = { sizeof (pickcolor_t3008228408), -1, 0, 0 };
extern const int32_t g_FieldOffsetTable1703[8] = 
{
	pickcolor_t3008228408::get_offset_of_pink_2(),
	pickcolor_t3008228408::get_offset_of_blue_3(),
	pickcolor_t3008228408::get_offset_of_green_4(),
	pickcolor_t3008228408::get_offset_of_yellow_5(),
	pickcolor_t3008228408::get_offset_of_purple_6(),
	pickcolor_t3008228408::get_offset_of_sqColor_7(),
	pickcolor_t3008228408::get_offset_of_colorObj_8(),
	pickcolor_t3008228408::get_offset_of_colorScript_9(),
};
extern const Il2CppTypeDefinitionSizes g_typeDefinitionSize1704 = { sizeof (savecolor_t1487029836), -1, sizeof(savecolor_t1487029836_StaticFields), 0 };
extern const int32_t g_FieldOffsetTable1704[1] = 
{
	savecolor_t1487029836_StaticFields::get_offset_of_sqColor_2(),
};
extern const Il2CppTypeDefinitionSizes g_typeDefinitionSize1705 = { sizeof (squarescript_t3380826768), -1, sizeof(squarescript_t3380826768_StaticFields), 0 };
extern const int32_t g_FieldOffsetTable1705[39] = 
{
	squarescript_t3380826768::get_offset_of_square_2(),
	squarescript_t3380826768::get_offset_of_lastKey_3(),
	squarescript_t3380826768::get_offset_of_currKey_4(),
	squarescript_t3380826768::get_offset_of_count_5(),
	squarescript_t3380826768::get_offset_of_ts_6(),
	squarescript_t3380826768::get_offset_of_startX_7(),
	squarescript_t3380826768::get_offset_of_startY_8(),
	squarescript_t3380826768::get_offset_of_rightWall_9(),
	squarescript_t3380826768::get_offset_of_leftWall_10(),
	squarescript_t3380826768::get_offset_of_upWall_11(),
	squarescript_t3380826768::get_offset_of_downWall_12(),
	squarescript_t3380826768::get_offset_of_array_13(),
	squarescript_t3380826768::get_offset_of_cells_14(),
	squarescript_t3380826768::get_offset_of_columns_15(),
	squarescript_t3380826768::get_offset_of_rows_16(),
	squarescript_t3380826768::get_offset_of_coinCount_17(),
	squarescript_t3380826768::get_offset_of_countMoney_18(),
	squarescript_t3380826768::get_offset_of_enemyCoins_19(),
	squarescript_t3380826768::get_offset_of_gui_money_20(),
	squarescript_t3380826768::get_offset_of_coinGoal_21(),
	squarescript_t3380826768::get_offset_of_coinTotal_22(),
	squarescript_t3380826768::get_offset_of_style_23(),
	squarescript_t3380826768::get_offset_of_style2_24(),
	squarescript_t3380826768::get_offset_of_win_25(),
	squarescript_t3380826768::get_offset_of_lose_26(),
	squarescript_t3380826768::get_offset_of_level_27(),
	squarescript_t3380826768_StaticFields::get_offset_of_levArr_28(),
	squarescript_t3380826768::get_offset_of_scene_29(),
	squarescript_t3380826768::get_offset_of_started_30(),
	squarescript_t3380826768::get_offset_of_raysResults_31(),
	squarescript_t3380826768::get_offset_of_rayVector_32(),
	squarescript_t3380826768::get_offset_of_myCollider2D_33(),
	squarescript_t3380826768::get_offset_of_pos_34(),
	squarescript_t3380826768::get_offset_of_mask_35(),
	squarescript_t3380826768::get_offset_of_enemyObj_36(),
	squarescript_t3380826768::get_offset_of_enemyScript_37(),
	squarescript_t3380826768::get_offset_of_collectObj_38(),
	squarescript_t3380826768::get_offset_of_collectScript_39(),
	squarescript_t3380826768::get_offset_of_sqColor_40(),
};
extern const Il2CppTypeDefinitionSizes g_typeDefinitionSize1706 = { sizeof (tilescript_t4226655977), -1, 0, 0 };
extern const int32_t g_FieldOffsetTable1706[4] = 
{
	tilescript_t4226655977::get_offset_of_prefab_2(),
	tilescript_t4226655977::get_offset_of_cells_3(),
	tilescript_t4226655977::get_offset_of_rows_4(),
	tilescript_t4226655977::get_offset_of_columns_5(),
};
extern const Il2CppTypeDefinitionSizes g_typeDefinitionSize1707 = { sizeof (title_t1707147050), -1, 0, 0 };
extern const int32_t g_FieldOffsetTable1707[2] = 
{
	title_t1707147050::get_offset_of_style_2(),
	title_t1707147050::get_offset_of_style2_3(),
};
#ifdef __clang__
#pragma clang diagnostic pop
#endif

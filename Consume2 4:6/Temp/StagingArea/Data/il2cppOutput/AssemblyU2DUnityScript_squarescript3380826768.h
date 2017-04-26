#pragma once

#include "il2cpp-config.h"

#ifndef _MSC_VER
# include <alloca.h>
#else
# include <malloc.h>
#endif

#include <stdint.h>

#include "UnityEngine_UnityEngine_MonoBehaviour1158329972.h"
#include "UnityEngine_UnityEngine_RaycastHit2D4063908774.h"
#include "UnityEngine_UnityEngine_Vector22243707579.h"
#include "UnityEngine_UnityEngine_LayerMask3188175821.h"
#include "UnityEngine_UnityEngine_Color2020392075.h"

// UnityEngine.GameObject
struct GameObject_t1756533147;
// System.String
struct String_t;
// tilescript
struct tilescript_t4226655977;
// UnityScript.Lang.Array
struct Array_t1396575355;
// UnityEngine.GameObject[,]
struct GameObjectU5BU2CU5D_t3057952155;
// UnityEngine.UI.Text
struct Text_t356221433;
// UnityEngine.GUIStyle
struct GUIStyle_t1799908754;
// System.String[]
struct StringU5BU5D_t1642385972;
// UnityEngine.Collider2D
struct Collider2D_t646061738;
// enemy
struct enemy_t1088778788;
// collector
struct collector_t201400709;




#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Winvalid-offsetof"
#pragma clang diagnostic ignored "-Wunused-variable"
#endif

// squarescript
struct  squarescript_t3380826768  : public MonoBehaviour_t1158329972
{
public:
	// UnityEngine.GameObject squarescript::square
	GameObject_t1756533147 * ___square_2;
	// System.String squarescript::lastKey
	String_t* ___lastKey_3;
	// System.String squarescript::currKey
	String_t* ___currKey_4;
	// System.Int32 squarescript::count
	int32_t ___count_5;
	// tilescript squarescript::ts
	tilescript_t4226655977 * ___ts_6;
	// System.Single squarescript::startX
	float ___startX_7;
	// System.Single squarescript::startY
	float ___startY_8;
	// System.Single squarescript::rightWall
	float ___rightWall_9;
	// System.Single squarescript::leftWall
	float ___leftWall_10;
	// System.Single squarescript::upWall
	float ___upWall_11;
	// System.Single squarescript::downWall
	float ___downWall_12;
	// UnityScript.Lang.Array squarescript::array
	Array_t1396575355 * ___array_13;
	// UnityEngine.GameObject[,] squarescript::cells
	GameObjectU5BU2CU5D_t3057952155* ___cells_14;
	// System.Int32 squarescript::columns
	int32_t ___columns_15;
	// System.Int32 squarescript::rows
	int32_t ___rows_16;
	// System.Int32 squarescript::coinCount
	int32_t ___coinCount_17;
	// System.String squarescript::countMoney
	String_t* ___countMoney_18;
	// System.Int32 squarescript::enemyCoins
	int32_t ___enemyCoins_19;
	// UnityEngine.UI.Text squarescript::gui_money
	Text_t356221433 * ___gui_money_20;
	// System.Int32 squarescript::coinGoal
	int32_t ___coinGoal_21;
	// System.Int32 squarescript::coinTotal
	int32_t ___coinTotal_22;
	// UnityEngine.GUIStyle squarescript::style
	GUIStyle_t1799908754 * ___style_23;
	// UnityEngine.GUIStyle squarescript::style2
	GUIStyle_t1799908754 * ___style2_24;
	// System.Boolean squarescript::win
	bool ___win_25;
	// System.Boolean squarescript::lose
	bool ___lose_26;
	// System.Int32 squarescript::level
	int32_t ___level_27;
	// System.String squarescript::scene
	String_t* ___scene_29;
	// System.Boolean squarescript::started
	bool ___started_30;
	// UnityEngine.RaycastHit2D squarescript::raysResults
	RaycastHit2D_t4063908774  ___raysResults_31;
	// UnityEngine.Vector2 squarescript::rayVector
	Vector2_t2243707579  ___rayVector_32;
	// UnityEngine.Collider2D squarescript::myCollider2D
	Collider2D_t646061738 * ___myCollider2D_33;
	// UnityEngine.Vector2 squarescript::pos
	Vector2_t2243707579  ___pos_34;
	// UnityEngine.LayerMask squarescript::mask
	LayerMask_t3188175821  ___mask_35;
	// UnityEngine.GameObject squarescript::enemyObj
	GameObject_t1756533147 * ___enemyObj_36;
	// enemy squarescript::enemyScript
	enemy_t1088778788 * ___enemyScript_37;
	// UnityEngine.GameObject squarescript::collectObj
	GameObject_t1756533147 * ___collectObj_38;
	// collector squarescript::collectScript
	collector_t201400709 * ___collectScript_39;
	// UnityEngine.Color squarescript::sqColor
	Color_t2020392075  ___sqColor_40;

public:
	inline static int32_t get_offset_of_square_2() { return static_cast<int32_t>(offsetof(squarescript_t3380826768, ___square_2)); }
	inline GameObject_t1756533147 * get_square_2() const { return ___square_2; }
	inline GameObject_t1756533147 ** get_address_of_square_2() { return &___square_2; }
	inline void set_square_2(GameObject_t1756533147 * value)
	{
		___square_2 = value;
		Il2CppCodeGenWriteBarrier(&___square_2, value);
	}

	inline static int32_t get_offset_of_lastKey_3() { return static_cast<int32_t>(offsetof(squarescript_t3380826768, ___lastKey_3)); }
	inline String_t* get_lastKey_3() const { return ___lastKey_3; }
	inline String_t** get_address_of_lastKey_3() { return &___lastKey_3; }
	inline void set_lastKey_3(String_t* value)
	{
		___lastKey_3 = value;
		Il2CppCodeGenWriteBarrier(&___lastKey_3, value);
	}

	inline static int32_t get_offset_of_currKey_4() { return static_cast<int32_t>(offsetof(squarescript_t3380826768, ___currKey_4)); }
	inline String_t* get_currKey_4() const { return ___currKey_4; }
	inline String_t** get_address_of_currKey_4() { return &___currKey_4; }
	inline void set_currKey_4(String_t* value)
	{
		___currKey_4 = value;
		Il2CppCodeGenWriteBarrier(&___currKey_4, value);
	}

	inline static int32_t get_offset_of_count_5() { return static_cast<int32_t>(offsetof(squarescript_t3380826768, ___count_5)); }
	inline int32_t get_count_5() const { return ___count_5; }
	inline int32_t* get_address_of_count_5() { return &___count_5; }
	inline void set_count_5(int32_t value)
	{
		___count_5 = value;
	}

	inline static int32_t get_offset_of_ts_6() { return static_cast<int32_t>(offsetof(squarescript_t3380826768, ___ts_6)); }
	inline tilescript_t4226655977 * get_ts_6() const { return ___ts_6; }
	inline tilescript_t4226655977 ** get_address_of_ts_6() { return &___ts_6; }
	inline void set_ts_6(tilescript_t4226655977 * value)
	{
		___ts_6 = value;
		Il2CppCodeGenWriteBarrier(&___ts_6, value);
	}

	inline static int32_t get_offset_of_startX_7() { return static_cast<int32_t>(offsetof(squarescript_t3380826768, ___startX_7)); }
	inline float get_startX_7() const { return ___startX_7; }
	inline float* get_address_of_startX_7() { return &___startX_7; }
	inline void set_startX_7(float value)
	{
		___startX_7 = value;
	}

	inline static int32_t get_offset_of_startY_8() { return static_cast<int32_t>(offsetof(squarescript_t3380826768, ___startY_8)); }
	inline float get_startY_8() const { return ___startY_8; }
	inline float* get_address_of_startY_8() { return &___startY_8; }
	inline void set_startY_8(float value)
	{
		___startY_8 = value;
	}

	inline static int32_t get_offset_of_rightWall_9() { return static_cast<int32_t>(offsetof(squarescript_t3380826768, ___rightWall_9)); }
	inline float get_rightWall_9() const { return ___rightWall_9; }
	inline float* get_address_of_rightWall_9() { return &___rightWall_9; }
	inline void set_rightWall_9(float value)
	{
		___rightWall_9 = value;
	}

	inline static int32_t get_offset_of_leftWall_10() { return static_cast<int32_t>(offsetof(squarescript_t3380826768, ___leftWall_10)); }
	inline float get_leftWall_10() const { return ___leftWall_10; }
	inline float* get_address_of_leftWall_10() { return &___leftWall_10; }
	inline void set_leftWall_10(float value)
	{
		___leftWall_10 = value;
	}

	inline static int32_t get_offset_of_upWall_11() { return static_cast<int32_t>(offsetof(squarescript_t3380826768, ___upWall_11)); }
	inline float get_upWall_11() const { return ___upWall_11; }
	inline float* get_address_of_upWall_11() { return &___upWall_11; }
	inline void set_upWall_11(float value)
	{
		___upWall_11 = value;
	}

	inline static int32_t get_offset_of_downWall_12() { return static_cast<int32_t>(offsetof(squarescript_t3380826768, ___downWall_12)); }
	inline float get_downWall_12() const { return ___downWall_12; }
	inline float* get_address_of_downWall_12() { return &___downWall_12; }
	inline void set_downWall_12(float value)
	{
		___downWall_12 = value;
	}

	inline static int32_t get_offset_of_array_13() { return static_cast<int32_t>(offsetof(squarescript_t3380826768, ___array_13)); }
	inline Array_t1396575355 * get_array_13() const { return ___array_13; }
	inline Array_t1396575355 ** get_address_of_array_13() { return &___array_13; }
	inline void set_array_13(Array_t1396575355 * value)
	{
		___array_13 = value;
		Il2CppCodeGenWriteBarrier(&___array_13, value);
	}

	inline static int32_t get_offset_of_cells_14() { return static_cast<int32_t>(offsetof(squarescript_t3380826768, ___cells_14)); }
	inline GameObjectU5BU2CU5D_t3057952155* get_cells_14() const { return ___cells_14; }
	inline GameObjectU5BU2CU5D_t3057952155** get_address_of_cells_14() { return &___cells_14; }
	inline void set_cells_14(GameObjectU5BU2CU5D_t3057952155* value)
	{
		___cells_14 = value;
		Il2CppCodeGenWriteBarrier(&___cells_14, value);
	}

	inline static int32_t get_offset_of_columns_15() { return static_cast<int32_t>(offsetof(squarescript_t3380826768, ___columns_15)); }
	inline int32_t get_columns_15() const { return ___columns_15; }
	inline int32_t* get_address_of_columns_15() { return &___columns_15; }
	inline void set_columns_15(int32_t value)
	{
		___columns_15 = value;
	}

	inline static int32_t get_offset_of_rows_16() { return static_cast<int32_t>(offsetof(squarescript_t3380826768, ___rows_16)); }
	inline int32_t get_rows_16() const { return ___rows_16; }
	inline int32_t* get_address_of_rows_16() { return &___rows_16; }
	inline void set_rows_16(int32_t value)
	{
		___rows_16 = value;
	}

	inline static int32_t get_offset_of_coinCount_17() { return static_cast<int32_t>(offsetof(squarescript_t3380826768, ___coinCount_17)); }
	inline int32_t get_coinCount_17() const { return ___coinCount_17; }
	inline int32_t* get_address_of_coinCount_17() { return &___coinCount_17; }
	inline void set_coinCount_17(int32_t value)
	{
		___coinCount_17 = value;
	}

	inline static int32_t get_offset_of_countMoney_18() { return static_cast<int32_t>(offsetof(squarescript_t3380826768, ___countMoney_18)); }
	inline String_t* get_countMoney_18() const { return ___countMoney_18; }
	inline String_t** get_address_of_countMoney_18() { return &___countMoney_18; }
	inline void set_countMoney_18(String_t* value)
	{
		___countMoney_18 = value;
		Il2CppCodeGenWriteBarrier(&___countMoney_18, value);
	}

	inline static int32_t get_offset_of_enemyCoins_19() { return static_cast<int32_t>(offsetof(squarescript_t3380826768, ___enemyCoins_19)); }
	inline int32_t get_enemyCoins_19() const { return ___enemyCoins_19; }
	inline int32_t* get_address_of_enemyCoins_19() { return &___enemyCoins_19; }
	inline void set_enemyCoins_19(int32_t value)
	{
		___enemyCoins_19 = value;
	}

	inline static int32_t get_offset_of_gui_money_20() { return static_cast<int32_t>(offsetof(squarescript_t3380826768, ___gui_money_20)); }
	inline Text_t356221433 * get_gui_money_20() const { return ___gui_money_20; }
	inline Text_t356221433 ** get_address_of_gui_money_20() { return &___gui_money_20; }
	inline void set_gui_money_20(Text_t356221433 * value)
	{
		___gui_money_20 = value;
		Il2CppCodeGenWriteBarrier(&___gui_money_20, value);
	}

	inline static int32_t get_offset_of_coinGoal_21() { return static_cast<int32_t>(offsetof(squarescript_t3380826768, ___coinGoal_21)); }
	inline int32_t get_coinGoal_21() const { return ___coinGoal_21; }
	inline int32_t* get_address_of_coinGoal_21() { return &___coinGoal_21; }
	inline void set_coinGoal_21(int32_t value)
	{
		___coinGoal_21 = value;
	}

	inline static int32_t get_offset_of_coinTotal_22() { return static_cast<int32_t>(offsetof(squarescript_t3380826768, ___coinTotal_22)); }
	inline int32_t get_coinTotal_22() const { return ___coinTotal_22; }
	inline int32_t* get_address_of_coinTotal_22() { return &___coinTotal_22; }
	inline void set_coinTotal_22(int32_t value)
	{
		___coinTotal_22 = value;
	}

	inline static int32_t get_offset_of_style_23() { return static_cast<int32_t>(offsetof(squarescript_t3380826768, ___style_23)); }
	inline GUIStyle_t1799908754 * get_style_23() const { return ___style_23; }
	inline GUIStyle_t1799908754 ** get_address_of_style_23() { return &___style_23; }
	inline void set_style_23(GUIStyle_t1799908754 * value)
	{
		___style_23 = value;
		Il2CppCodeGenWriteBarrier(&___style_23, value);
	}

	inline static int32_t get_offset_of_style2_24() { return static_cast<int32_t>(offsetof(squarescript_t3380826768, ___style2_24)); }
	inline GUIStyle_t1799908754 * get_style2_24() const { return ___style2_24; }
	inline GUIStyle_t1799908754 ** get_address_of_style2_24() { return &___style2_24; }
	inline void set_style2_24(GUIStyle_t1799908754 * value)
	{
		___style2_24 = value;
		Il2CppCodeGenWriteBarrier(&___style2_24, value);
	}

	inline static int32_t get_offset_of_win_25() { return static_cast<int32_t>(offsetof(squarescript_t3380826768, ___win_25)); }
	inline bool get_win_25() const { return ___win_25; }
	inline bool* get_address_of_win_25() { return &___win_25; }
	inline void set_win_25(bool value)
	{
		___win_25 = value;
	}

	inline static int32_t get_offset_of_lose_26() { return static_cast<int32_t>(offsetof(squarescript_t3380826768, ___lose_26)); }
	inline bool get_lose_26() const { return ___lose_26; }
	inline bool* get_address_of_lose_26() { return &___lose_26; }
	inline void set_lose_26(bool value)
	{
		___lose_26 = value;
	}

	inline static int32_t get_offset_of_level_27() { return static_cast<int32_t>(offsetof(squarescript_t3380826768, ___level_27)); }
	inline int32_t get_level_27() const { return ___level_27; }
	inline int32_t* get_address_of_level_27() { return &___level_27; }
	inline void set_level_27(int32_t value)
	{
		___level_27 = value;
	}

	inline static int32_t get_offset_of_scene_29() { return static_cast<int32_t>(offsetof(squarescript_t3380826768, ___scene_29)); }
	inline String_t* get_scene_29() const { return ___scene_29; }
	inline String_t** get_address_of_scene_29() { return &___scene_29; }
	inline void set_scene_29(String_t* value)
	{
		___scene_29 = value;
		Il2CppCodeGenWriteBarrier(&___scene_29, value);
	}

	inline static int32_t get_offset_of_started_30() { return static_cast<int32_t>(offsetof(squarescript_t3380826768, ___started_30)); }
	inline bool get_started_30() const { return ___started_30; }
	inline bool* get_address_of_started_30() { return &___started_30; }
	inline void set_started_30(bool value)
	{
		___started_30 = value;
	}

	inline static int32_t get_offset_of_raysResults_31() { return static_cast<int32_t>(offsetof(squarescript_t3380826768, ___raysResults_31)); }
	inline RaycastHit2D_t4063908774  get_raysResults_31() const { return ___raysResults_31; }
	inline RaycastHit2D_t4063908774 * get_address_of_raysResults_31() { return &___raysResults_31; }
	inline void set_raysResults_31(RaycastHit2D_t4063908774  value)
	{
		___raysResults_31 = value;
	}

	inline static int32_t get_offset_of_rayVector_32() { return static_cast<int32_t>(offsetof(squarescript_t3380826768, ___rayVector_32)); }
	inline Vector2_t2243707579  get_rayVector_32() const { return ___rayVector_32; }
	inline Vector2_t2243707579 * get_address_of_rayVector_32() { return &___rayVector_32; }
	inline void set_rayVector_32(Vector2_t2243707579  value)
	{
		___rayVector_32 = value;
	}

	inline static int32_t get_offset_of_myCollider2D_33() { return static_cast<int32_t>(offsetof(squarescript_t3380826768, ___myCollider2D_33)); }
	inline Collider2D_t646061738 * get_myCollider2D_33() const { return ___myCollider2D_33; }
	inline Collider2D_t646061738 ** get_address_of_myCollider2D_33() { return &___myCollider2D_33; }
	inline void set_myCollider2D_33(Collider2D_t646061738 * value)
	{
		___myCollider2D_33 = value;
		Il2CppCodeGenWriteBarrier(&___myCollider2D_33, value);
	}

	inline static int32_t get_offset_of_pos_34() { return static_cast<int32_t>(offsetof(squarescript_t3380826768, ___pos_34)); }
	inline Vector2_t2243707579  get_pos_34() const { return ___pos_34; }
	inline Vector2_t2243707579 * get_address_of_pos_34() { return &___pos_34; }
	inline void set_pos_34(Vector2_t2243707579  value)
	{
		___pos_34 = value;
	}

	inline static int32_t get_offset_of_mask_35() { return static_cast<int32_t>(offsetof(squarescript_t3380826768, ___mask_35)); }
	inline LayerMask_t3188175821  get_mask_35() const { return ___mask_35; }
	inline LayerMask_t3188175821 * get_address_of_mask_35() { return &___mask_35; }
	inline void set_mask_35(LayerMask_t3188175821  value)
	{
		___mask_35 = value;
	}

	inline static int32_t get_offset_of_enemyObj_36() { return static_cast<int32_t>(offsetof(squarescript_t3380826768, ___enemyObj_36)); }
	inline GameObject_t1756533147 * get_enemyObj_36() const { return ___enemyObj_36; }
	inline GameObject_t1756533147 ** get_address_of_enemyObj_36() { return &___enemyObj_36; }
	inline void set_enemyObj_36(GameObject_t1756533147 * value)
	{
		___enemyObj_36 = value;
		Il2CppCodeGenWriteBarrier(&___enemyObj_36, value);
	}

	inline static int32_t get_offset_of_enemyScript_37() { return static_cast<int32_t>(offsetof(squarescript_t3380826768, ___enemyScript_37)); }
	inline enemy_t1088778788 * get_enemyScript_37() const { return ___enemyScript_37; }
	inline enemy_t1088778788 ** get_address_of_enemyScript_37() { return &___enemyScript_37; }
	inline void set_enemyScript_37(enemy_t1088778788 * value)
	{
		___enemyScript_37 = value;
		Il2CppCodeGenWriteBarrier(&___enemyScript_37, value);
	}

	inline static int32_t get_offset_of_collectObj_38() { return static_cast<int32_t>(offsetof(squarescript_t3380826768, ___collectObj_38)); }
	inline GameObject_t1756533147 * get_collectObj_38() const { return ___collectObj_38; }
	inline GameObject_t1756533147 ** get_address_of_collectObj_38() { return &___collectObj_38; }
	inline void set_collectObj_38(GameObject_t1756533147 * value)
	{
		___collectObj_38 = value;
		Il2CppCodeGenWriteBarrier(&___collectObj_38, value);
	}

	inline static int32_t get_offset_of_collectScript_39() { return static_cast<int32_t>(offsetof(squarescript_t3380826768, ___collectScript_39)); }
	inline collector_t201400709 * get_collectScript_39() const { return ___collectScript_39; }
	inline collector_t201400709 ** get_address_of_collectScript_39() { return &___collectScript_39; }
	inline void set_collectScript_39(collector_t201400709 * value)
	{
		___collectScript_39 = value;
		Il2CppCodeGenWriteBarrier(&___collectScript_39, value);
	}

	inline static int32_t get_offset_of_sqColor_40() { return static_cast<int32_t>(offsetof(squarescript_t3380826768, ___sqColor_40)); }
	inline Color_t2020392075  get_sqColor_40() const { return ___sqColor_40; }
	inline Color_t2020392075 * get_address_of_sqColor_40() { return &___sqColor_40; }
	inline void set_sqColor_40(Color_t2020392075  value)
	{
		___sqColor_40 = value;
	}
};

struct squarescript_t3380826768_StaticFields
{
public:
	// System.String[] squarescript::levArr
	StringU5BU5D_t1642385972* ___levArr_28;

public:
	inline static int32_t get_offset_of_levArr_28() { return static_cast<int32_t>(offsetof(squarescript_t3380826768_StaticFields, ___levArr_28)); }
	inline StringU5BU5D_t1642385972* get_levArr_28() const { return ___levArr_28; }
	inline StringU5BU5D_t1642385972** get_address_of_levArr_28() { return &___levArr_28; }
	inline void set_levArr_28(StringU5BU5D_t1642385972* value)
	{
		___levArr_28 = value;
		Il2CppCodeGenWriteBarrier(&___levArr_28, value);
	}
};

#ifdef __clang__
#pragma clang diagnostic pop
#endif

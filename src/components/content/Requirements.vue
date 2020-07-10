<template>
	<div class="SbMain">
		<!-- nav start -->
		<div class="nav">
			<div class="one">
				<i class="iconfont icon-liebiao"></i>
				<p> 当前位置 ：</p>
				<p>易转网首页 ></p>
				<p>需求大厅</p>
			</div>
			<div class="two">
				<div class="EEEEEE xxx">
				    <i class="iconfont icon-unie737"></i>
				    <p>平台帮找</p>
				</div>
			</div>
		</div>
		<!-- nav end -->

		<!-- screen start -->
		<div class="screen">
			<div class="margin">
				<div class="left">
					<div class="leftr">
						<img src="../../assets/images/banner.png" alt="">
					</div>
				</div>
			</div>
			<div class="requirement">
				<div style="border-left: 3px solid #ff7e00;margin:10px 10px;padding:10px 20px;font-size: 18px;">发布需求</div>
				<el-row style="padding:20px 30px;display: flex;justify-content: space-between;">
					<el-col :span="6">
						<el-select v-model="value" placeholder="请选择省份">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						  </el-select>
					</el-col>
					<el-col :span="6">
						<el-select v-model="value" placeholder="请选择类型">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						  </el-select>
					</el-col>
					<el-col :span="5">
						<el-input placeholder="请输入联系人"></el-input>
					</el-col>
					<el-col :span="5">
						<el-input placeholder="请输入电话号码"></el-input>
					</el-col>
				</el-row>
				<el-row style="display: flex;justify-content: center;padding-bottom: 30px;">
					<el-col :span="22">
						<el-input
						  type="textarea"
						  :rows="10"
						  placeholder="请输入内容"
						  v-model="textarea">
						</el-input>
					</el-col>
				</el-row>
			</div>
			<div class="company" style="border-radius: 5px;border: 1px solid #409EFF;background-color: rgba(248,248,248,1);">
				<div class="son1">
					<div style="border-left: 3px solid #ff7e00;margin:10px 10px;padding:10px 20px;font-size: 18px;">公司求购</div>
				</div>
				<div class="content">
					<scroll :data="options" :class-option="optionSingleHeight" class="seamless-warp">
						<div style="border: 1px solid #409EFF;background-color: rgba(64,158,255,0.2);color:#1274DA;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
						<div style="border: 1px solid #409EFF;background-color: rgba(64,158,255,0.2);color:#1274DA;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
						<div style="border: 1px solid #409EFF;background-color: rgba(64,158,255,0.2);color:#1274DA;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
						<div style="border: 1px solid #409EFF;background-color: rgba(64,158,255,0.2);color:#1274DA;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
						<div style="border: 1px solid #409EFF;background-color: rgba(64,158,255,0.2);color:#1274DA;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
						<div style="border: 1px solid #409EFF;background-color: rgba(64,158,255,0.2);color:#1274DA;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
						<div style="border: 1px solid #409EFF;background-color: rgba(64,158,255,0.2);color:#1274DA;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
						<div style="border: 1px solid #409EFF;background-color: rgba(64,158,255,0.2);color:#1274DA;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
						<div style="border: 1px solid #409EFF;background-color: rgba(64,158,255,0.2);color:#1274DA;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
						<div style="border: 1px solid #409EFF;background-color: rgba(64,158,255,0.2);color:#1274DA;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
						<div style="border: 1px solid #409EFF;background-color: rgba(64,158,255,0.2);color:#1274DA;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
						
					</scroll>
				</div>
			</div>
			<div class="company" style="border-radius: 5px;border: 1px solid #F56C6C;">
				<div class="son1">
					<div style="border-left: 3px solid #ff7e00;margin:10px 10px;padding:10px 20px;font-size: 18px;">网店求购</div>
				</div>
				<div class="content">
					<scroll :data="options" :class-option="optionSingleHeight" class="seamless-warp">
						<div style="border: 1px solid #F56C6C;background-color: rgba(245,108,108,0.2);color:#ce5a5a;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
						<div style="border: 1px solid #F56C6C;background-color: rgba(245,108,108,0.2);color:#ce5a5a;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
						<div style="border: 1px solid #F56C6C;background-color: rgba(245,108,108,0.2);color:#ce5a5a;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
						<div style="border: 1px solid #F56C6C;background-color: rgba(245,108,108,0.2);color:#ce5a5a;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
						<div style="border: 1px solid #F56C6C;background-color: rgba(245,108,108,0.2);color:#ce5a5a;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
						<div style="border: 1px solid #F56C6C;background-color: rgba(245,108,108,0.2);color:#ce5a5a;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
						<div style="border: 1px solid #F56C6C;background-color: rgba(245,108,108,0.2);color:#ce5a5a;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
						<div style="border: 1px solid #F56C6C;background-color: rgba(245,108,108,0.2);color:#ce5a5a;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
						<div style="border: 1px solid #F56C6C;background-color: rgba(245,108,108,0.2);color:#ce5a5a;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
						<div style="border: 1px solid #F56C6C;background-color: rgba(245,108,108,0.2);color:#ce5a5a;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
					</scroll>
				</div>
			</div>
			<div class="company" style="border-radius: 5px;border: 1px solid #67C23A;">
				<div class="son1">
					<div style="border-left: 3px solid #ff7e00;margin:10px 10px;padding:10px 20px;font-size: 18px;">商标求购</div>
				</div>
				<div class="content">
					<scroll :data="options" :class-option="optionSingleHeight" class="seamless-warp">
						<div style="border: 1px solid #67C23A;background-color: rgba(103,194,58,0.2);color:#50962c;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
						<div style="border: 1px solid #67C23A;background-color: rgba(103,194,58,0.2);color:#50962c;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
						<div style="border: 1px solid #67C23A;background-color: rgba(103,194,58,0.2);color:#50962c;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
						<div style="border: 1px solid #67C23A;background-color: rgba(103,194,58,0.2);color:#50962c;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
						<div style="border: 1px solid #67C23A;background-color: rgba(103,194,58,0.2);color:#50962c;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
						<div style="border: 1px solid #67C23A;background-color: rgba(103,194,58,0.2);color:#50962c;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
						<div style="border: 1px solid #67C23A;background-color: rgba(103,194,58,0.2);color:#50962c;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
						<div style="border: 1px solid #67C23A;background-color: rgba(103,194,58,0.2);color:#50962c;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
						<div style="border: 1px solid #67C23A;background-color: rgba(103,194,58,0.2);color:#50962c;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div><div style="border: 1px solid #67C23A;background-color: rgba(103,194,58,0.2);color:#50962c;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
					</scroll>
				</div>
			</div>
			<div class="company" style="border-radius: 5px;border: 1px solid #cb4ed9;">
				<div class="son1">
					<div style="border-left: 3px solid #ff7e00;margin:10px 10px;padding:10px 20px;font-size: 18px;">资质求购</div>
				</div>
				<div class="content">
					<scroll :data="options" :class-option="optionSingleHeight" class="seamless-warp">
						<div style="border: 1px solid #BD49C9;background-color: rgba(189,73,201,0.2);color:#873490;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
						<div style="border: 1px solid #BD49C9;background-color: rgba(189,73,201,0.2);color:#873490;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
						<div style="border: 1px solid #BD49C9;background-color: rgba(189,73,201,0.2);color:#873490;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
						<div style="border: 1px solid #BD49C9;background-color: rgba(189,73,201,0.2);color:#873490;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
						<div style="border: 1px solid #BD49C9;background-color: rgba(189,73,201,0.2);color:#873490;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
						<div style="border: 1px solid #BD49C9;background-color: rgba(189,73,201,0.2);color:#873490;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
						<div style="border: 1px solid #BD49C9;background-color: rgba(189,73,201,0.2);color:#873490;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
						<div style="border: 1px solid #BD49C9;background-color: rgba(189,73,201,0.2);color:#873490;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
						<div style="border: 1px solid #BD49C9;background-color: rgba(189,73,201,0.2);color:#873490;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
						<div style="border: 1px solid #BD49C9;background-color: rgba(189,73,201,0.2);color:#873490;padding:5px 10px;border-radius: 5px;width:100%;display: flex;justify-content: space-between;margin-bottom: 10px;">
							<span style="">上海</span>
							<span style="">李先生</span>
							<span style="width: 900px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，收购郑州商贸贸易、实业生产公司，一年以上，税务正常，变更次数少，小规模，直接变更，</span>
							<span style="">时间：2020-01-02</span>
						</div>
					</scroll>
				</div>
			</div>
		</div>
		<!-- screen end -->
	</div>
</template>

<script>
	import scroll from 'vue-seamless-scroll'
	export default {
		components: {
			scroll
		},
		data() {
			return {
				value:'',
				options: [{
				          value: '选项1',
				          label: '黄金糕'
				        }, {
				          value: '选项2',
				          label: '双皮奶'
				        }, {
				          value: '选项3',
				          label: '蚵仔煎'
				        }, {
				          value: '选项4',
				          label: '龙须面'
				        }, {
				          value: '选项5',
				          label: '北京烤鸭'
				        }],
				screenList: [
					["不限", "服饰", "母婴", "化妆品", "食品", "3C数码", "图书音像", "运动户外", "汽车及配件", "服务大类", "珠宝配饰", "家用电器", "居家日用", "家具家装家纺", "鞋类箱包",
						"保健品及医药", "乐器", "话费通讯", "网游及QQ"
					],
					["不限", "中文", "英文", "中文+英文", "图形", "中文+图形", "组合", "数字", "拼音", "英文+图形", "中文+拼音", "中文+英文+拼音"],
					["不限", "1-2字", "3字", "4字", "5字", "5字以上"],
					["不限", "1万以下", "1-2万", "2-5万", "5万以上"],
				],
				resultname: ["综合排序", "价格排序", "下证时间", "字符数量", "人气排序"],
				screentitle: ["商标分类", "组合类型", "字符长度", "出售价格"],
				screenshow: [0, 0, 0, 0, 0, 0, 0, 0, 0],
				rstopnum: 0,
				resultList: [{
						url: "http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
						title: "3类-柒小柒",
						price: "2000.00"
					},
					{
						url: "http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
						title: "3类-柒小柒",
						price: "2000.00"
					}, {
						url: "http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
						title: "3类-柒小柒",
						price: "2000.00"
					}, {
						url: "http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
						title: "3类-柒小柒",
						price: "2000.00"
					}, {
						url: "http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
						title: "3类-柒小柒",
						price: "2000.00"
					}, {
						url: "http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
						title: "3类-柒小柒",
						price: "2000.00"
					}, {
						url: "http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
						title: "3类-柒小柒",
						price: "2000.00"
					}, {
						url: "http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
						title: "3类-柒小柒",
						price: "2000.00"
					}, {
						url: "http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
						title: "3类-柒小柒",
						price: "2000.00"
					}, {
						url: "http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
						title: "3类-柒小柒",
						price: "2000.00"
					}, {
						url: "http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
						title: "3类-柒小柒",
						price: "2000.00"
					}, {
						url: "http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
						title: "3类-柒小柒",
						price: "2000.00"
					}, {
						url: "http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
						title: "3类-柒小柒",
						price: "2000.00"
					}, {
						url: "http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
						title: "3类-柒小柒",
						price: "2000.00"
					}, {
						url: "http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
						title: "3类-柒小柒",
						price: "2000.00"
					},
				], //结果列表
				interested: [{
						url: "http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
						title: "3类-柒小柒",
						price: "2000.00"
					},
					{
						url: "http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
						title: "3类-柒小柒",
						price: "2000.00"
					},
					{
						url: "http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
						title: "3类-柒小柒",
						price: "2000.00"
					},
				], //可能感兴趣公司列表
			}
		},
		computed: {
			optionSingleHeight() {
				return {
					//什么都不设置默认的
					singleHeight: 0, //（带停顿的）
					waitTime: 1, //（停顿时间）
					// direction: 0,          //（从上往下的）
					step: 0.5, //（调整速度的）
					// hoverStop:false       // (鼠标停留停止 离开继续运行（反之则停止）)
				}
			}
		},
		methods: {
			//切换筛选条件
			changescreen: function(index, index1) {
				this.screenshow.splice(index, 1, index1)
			},
			//切换展示区域
			cshowres: function(num) {
				this.rstopnum = num
			}
		}
	}
</script>

<style scoped lang="less">
	.SbMain {
		font-size: 14px;
		width: 100%;
		margin: 0 auto;
		min-width: 1200px;
		overflow: hidden;
		.nav {
			width: 1176px;
			height: 60px;
			margin: 5px auto;
			padding-top: 10px;
			display: flex;
			justify-content: space-between;
			background-color: #fff;
			.one {
				display: flex;
				width: 50%;

				p,
				i {
					line-height: 60px;
					margin-right: 10px;
					color: #666;
					font-size: 14px;
				}

				i {
					font-size: 18px;
					color: #000;
				}

				.zhuan {
					transition: .3s;

					&:hover {
						color: #FF7815
					}
				}
			}

			.two {
				width: 50%;
				display: flex;
				justify-content: flex-end;

				.xxx {
					display: flex;
					width: 50%;
					justify-content: center;
					margin: auto 10px;
					width: 140px;
					line-height: 34px;

					p {
						margin: 0;
					}

					i {
						margin-right: 10px;
						font-size: 18px;
					}
				}

				.EEEEEE {
					background-color: #EEEEEE;
					position: relative;
					color: #888;
					cursor: pointer;
					border-radius: 5px;

					&:hover {
						.ewm {
							display: block;
						}
					}

					.ewm {
						display: none;
						position: absolute;
						width: 170px;
						height: 180px;
						top: 50px;
						left: -10px;
						background-color: #fff;
						border: 1px solid #E1E1E1;

						img {
							display: block;
							width: 130px;
							height: 130px;
							margin: 20px auto 0;
						}

						p {
							line-height: 24px;
							text-align: center;
							color: #888;
							font-size: 14px;
						}
					}
				}

				.FF7E00 {
					background-color: #EEEEEE;
					color: #888;
					border-radius: 5px;
					cursor: pointer;
				}

				.EA2417 {
					background-color: #EA2417;
					color: #fff;
				}
			}
		}

		.screen {
			padding: 10px;
			
			.margin {
				width: 1200px;
				margin: auto;
				display: flex;
				justify-content: space-between;
				background-color: #fff;
				.left {
					display: flex;
					justify-content: space-between;
					box-sizing: border-box;
					border-radius: 6px;

					.leftr {
						border-radius: 6px;
						img{
							border-radius: 6px;
						}
						.leftrone {
							display: flex;
							margin-top: 10px;
							border-bottom: 1px solid #ccc;
							padding-bottom: 20px;

							p {
								width: 120px;
								line-height: 30px;
								height: 30px;
								text-indent: 10px;

								i {
									display: inline-block;
									margin-right: 10px;
									vertical-align: -1px;
									color: #666;
								}
							}

							.son {
								color: #666;
								flex: 1;
								display: flex;
								flex-wrap: wrap;

								div {
									cursor: pointer;
									padding: 0 16px;
									margin-right: 4px;
									line-height: 31px;
									border-radius: 5px;
									margin-top: 4px;
									height:31px;
									&:hover {
										color: #F3A54D
									}
								}

								.show {
									background-color: #F3A54D;
									color: #fff;

									&:hover {
										color: #fff
									}
								}
							}
						}

						.last {
							border-bottom: none;
						}
					}
				}
			}

			
			.requirement {
				width: 1176px;
				margin: 10px auto;
				background-color: #fff;
				border-radius: 5px;
				border: 1px solid #F3A54D;

				.resultbottom {
					justify-content: space-between;
					display: flex;
					flex-wrap: wrap;
					margin-top: 10px;

					.bfath {
						width: 230px;
						height: 300px;
						border-radius: 5px;
						background-color: rgba(1,1,1,0);
						margin-bottom: 10px;
						overflow: hidden;
						border: 1px solid #fff;
						transition: 0.3s;
						text-align: center;

						&:hover {
							margin-top: -2px;
							box-shadow: 0 15px 15px 0 rgba(243,165,77,0.1);
							text-decoration: none;
							border: 1px solid #F3A54D;
						}
						.img{
							height:137px;
							background-color: #fff;
							img {
								display: block;
								max-width: 200px;
								margin: 20px auto;
							}
						}

						p {
							padding-top: 50px;
							text-align: center;
							z-index: 999;
							font-size: 16px;
							color:#888
						}
						.desc{
							font-size: 12px;
							color:#888;
							padding: 0 10px;
							overflow:hidden; //超出的文本隐藏
							text-overflow:ellipsis; //溢出用省略号显示
							white-space:nowrap; //溢出不换行
						}

						span {
							display: block;
							text-align: center;
							font-weight: bold;
							margin-top: 4px;
							color: red;
						}

						div {
							line-height: 30px;
							text-align: center;
							width: 200px;
							background-color: #F3A54D;
							border-radius: 4px 4px 0 0;
							margin: auto;
							color: #fff;
							transform: translateY(49px);
							transition: 0.3s;
						}
					}
				}

				.pages {
					width: 1200px;
					margin: auto;
					padding-bottom: 50px;
					background-color: #fff;

					.block {
						padding-top: 20px;
						text-align: center;
					}
				}

                .wei{
                    display: flex;
                    width:1200px;
                    box-sizing: border-box;
                    padding:20px 180px;
                    background-color: #fff;
                    img{
						max-width: 100px;
                        margin-right:42px;
                    }
                    .weione{
                        padding-top:14px;
                        div{
                            display: flex;
                            .ptwo{
                                width:154px;
                                text-align: center;
                                color:#fff;
                                font-size: 16px;
                                line-height: 40px;
                                height:40px;
                                border-radius: 4px;
                                background-color: #FF805A;
								cursor: pointer;
                            }
                            span{
                                display: block;
                                margin:0 16px;
                                font-size: 26px;
                            }
                            .pthree{
								cursor: pointer;
                                width:170px;
                                line-height: 38px;
                                height:38px;
                                text-align: center;
                                border-radius: 4px;
                                color:#FF805A;
                                border:1px solid #FF805A;
                            }
                            .pone{
                                font-size: 26px;
                                margin-right:20px
                            }
                        }
                        .pfour{
                            color:#999;
                            margin-top:10px;
                        }
                    } 
                }

			}
			.company{
				width:1176px;
				background-color: #fff;
				margin: 20px auto;
				.son1{
					width: 1200px;
				}
				.content{
					width:100%;
					height:400px;
					padding:20px 20px;
					margin-bottom:20px;
					overflow: hidden;
				}
			}
			.interested{
				width: 100%;
			    min-width:1200px;
				margin:0 auto;
			    margin-top:20px !important;
				margin-bottom: 0px !important;
				z-index: 999999;
			    background-image: url(../../assets/images/banner1.png);
				background-repeat: x-repeat;
			    box-sizing: border-box;
			    padding:0 20px;
				text-align: center;
				overflow: hidden;
				h2,p{
					color:#fff;
				}
			    .img{
			        display: block;
			        margin:auto;
			        margin-bottom: 16px;
			    }
			    .inlist{
					max-width: 1200px;
			        display: flex;
					margin:20px auto;
					padding-bottom: 40px;
			        justify-content: space-between;
			        .inlistone{
			            width:373px;
			            height:171px;
						cursor: pointer;
						border-radius: 5px;
			            border:1px solid #F2F2F2;
			            background-color: rgba(255,255,255,0.2);
			            box-sizing: border-box;
			            padding:14px;
						transition: 0.5s;
			            &:hover{
							margin-top: -10px;
							background-color: rgba(255,255,255,0.4);
			            }
			            .intop{
			                display: flex;
			                &:hover{
			                    p{
			                        color: #FF805A;
			                    }
			                }
			                img{
			                    width:16px;
			                    height:16px;
			                    margin-top:4px;
			                    margin-right:10px;
			                }
			                p{
			                    font-size: 16px;
			                    color:#fff;
			                }
			            }
			            .xiangxi{
			                margin-top:20px;
			                display: flex;
			                justify-content: space-between;
			                .xxone,.xxtwo,.xxthree{
			                    width:90px;
			                    border-right:1px solid #ccc;
			                    span{
			                        font-size: 12px;
			                        color:#fff;
			                    }
			                    p{
									color:#fff;
			                        margin-top:10px;
			                        overflow: hidden;
			                        text-overflow:ellipsis;
			                        white-space: nowrap;
			                    }
			                }
			                .xxthree{
			                    width:100px;
			                    text-align: right;
			                    line-height: 50px;
			                    font-size: 16px;
			                    color:#FF805A;
			                }
			                .xxtwo{
			                    box-sizing: border-box;
			                    padding-left:20px;
			                    flex: 1;
			                }
			                .xxtwo,.xxthree{
			                    border-right: none;
			                }
			            }
			            .hangye{
			                display: flex;
			                margin-top:12px;
			                color:#fff;
							p{
								color:#fff;
							}
			            }
			        }
			    }
			}
		}
	}
</style>

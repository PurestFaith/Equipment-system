// import MyTable from '@/components/MyTable/index.vue'
// import MyColorTable from '@/components/MyColorTable/index.vue'
// import EmployeeForms from '@/components/EmployeeForms/index.vue'
// import SkillCertificates from '@/components/SkillCertificates/index.vue'
// import Template from '@/components/template/index.vue'
// import Mydialog from '@/components/Mydialog/index.vue'
// import UploadExcel from '@/components/UploadExcel/index.vue'
// // import ExportExcel from '@/components/ExportExcel/index.vue'
// import MyCard from '@/components/MyCard/index.vue'
// import MyPagination from '@/components/MyPagination/index.vue'
// import exportExcel from '@/views/AccommodationManagement/components/exportExcel.vue'
// // import PdfExport from '@/components/pdfExport/index.vue'
import Init from "@/components/initContent/index.vue";
export default {
  install(Vue, option) {
    // Vue.component('MyTable', MyTable)
    // Vue.component('MyColorTable', MyColorTable)
    // Vue.component('EmployeeForms', EmployeeForms) // 员工技能矩阵图
    // Vue.component('SkillCertificates', SkillCertificates) // 技能合格证书
    // Vue.component('UploadExcel', UploadExcel) // excel导入
    // Vue.component('ExportExcel', ExportExcel) // excel导出
    // Vue.component('Template', Template) // 下载excel模板
    // Vue.component('Mydialog', Mydialog) // 弹出层
    // Vue.component('MyCard', MyCard) // 卡片
    // Vue.component('MyPagination', MyPagination) // 分页
    // Vue.component('exportExcel', exportExcel) // 分页
    // Vue.component('PdfExport', PdfExport) // 页面内嵌pdf  demo
    Vue.component("Init", Init); // 页面内嵌pdf  demo
  },
};

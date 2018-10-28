<template>
   <wxc-result type="errorPage"
              :show="show"
              padding-top="232"
              @wxcResultButtonClicked="wxcResultButtonClicked">
    </wxc-result>
</template>
<script>
import { WxcResult } from 'weex-ui'
const modal = weex.requireModule('modal')
export default {
  components: { WxcResult },
  data: () => ({
    show: true
  }),
  methods: {
    wxcResultButtonClicked (e) {
      // e.type即错误页面类型，可以在这里做对应操作
      modal.toast({
        'message': e.type,
        'duration': 1
      })
    }
  }
}
</script>

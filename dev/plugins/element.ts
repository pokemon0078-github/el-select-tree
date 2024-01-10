import '@/element-ui.ts';
import 'element-ui/lib/theme-chalk/index.css';

import {
  Form,
  FormItem,
  Button,
  Table,
  TableColumn,
  Loading,
  Link,
  Divider,
  Checkbox,
} from 'element-ui';
import Vue from 'vue';

import ElTreeSelect, { ElSelectTreeVirtual } from '@/index';

Vue.use(Form);
Vue.use(FormItem);
Vue.use(Button);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Loading);
Vue.use(Link);
Vue.use(Divider);
Vue.use(Checkbox);
Vue.use(ElTreeSelect);
Vue.use(ElSelectTreeVirtual);

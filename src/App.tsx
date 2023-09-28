import 'src/components/common/Form/fields/numberField';
import 'src/components/common/Form/fields/textField';
import 'src/components/common/Form/fields/textAreaField';
import 'src/components/common/Form/fields/passwordField';
import 'src/components/common/Form/fields/phoneField';
import 'src/components/common/Form/fields/selectField';
import 'src/components/common/Form/fields/switchField';
import 'src/components/common/Form/fields/checkboxField';
import 'src/components/common/Form/fields/radioField';
import 'src/libs/bootstrap/bootstrap-grid.css';
import 'src/libs/bootstrap/bootstrap-reboot.css';
import 'src/theme/theme.css';

import s from './App.module.scss';
import { Demo } from './components/Demo';

function App() {
  return (
    <div className={s.app}>
      <Demo />
    </div>
  )
}

export default App

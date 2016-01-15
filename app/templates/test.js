import test from 'ava';
import 'babel-core/register';
import <%= camelModuleName %> from '../src';

test('<%= camelModuleName %>', (t) => {
  t.plan(1);
  t.same(<%= camelModuleName %>(), true, 'return true');
});

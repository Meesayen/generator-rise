import test from "ava"
import <%= camelModuleName %> from "../src"

test("<%= camelModuleName %>", (t) => {
  t.plan(1)
  t.same(<%= camelModuleName %>(), true, "return true")
})

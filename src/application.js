import { Application } from "@hotwired/stimulus"
import { definitionsFromContext } from "@stimulus/webpack-helpers"

const application = Application.start()
const context = require.context("./controllers", true, /\.js\.rb$/)
application.load(definitionsFromContext(context))

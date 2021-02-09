class ExampleController < Stimulus::Controller
  def connect()
    element.textContent = "It works!"
  end
end

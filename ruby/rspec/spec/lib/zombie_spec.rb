require "spec_helper"
require "lib/zombie"

describe Zombie do
  it "is named Ash" do
    zombie = Zombie.new
    zombie.name.should == "Ash"
  end

  it "has no brains" do
    zombie = Zombie.new
    zombie.brains.should < 1
  end

  it "is hungry" do
    zombie = Zombie.new
    #zombie.hungry?.should == true

    # another version
    #zombie.hungry?.should be_true

    # prdicate matcher
    zombie.should be_hungry
  end

  # to mark as pending
  # it "is named Ash" to-do-list

  # xit "is named Ash" do
  #...
  #end

  # it "is naed Ash" do
    #pending
  #end

end

#### Q. What values z-index can take
#### A. It can take 2 power 31 values.
* The values for z-index must be an positive/negative integer. This doesn’t mean you can have unlimited z-axis layers! The maximum range is ±2147483647.

* This is a perhaps lazy way to ensure that the element is always on top. It can lead to problems down the road when multiple elements need to be on top. Most of the time you’ll find that a z-index of 1 or 2 will suffice for your needs.
#!/bin/bash

gpio export 2 out
echo "1" > /sys/class/gpio/gpio2/value

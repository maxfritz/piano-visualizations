#!/usr/bin/env python
import pygame.midi

#initialize the module
pygame.midi.init()

#find attached, mio is only attached
print pygame.midi.get_default_input_id()
print pygame.midi.get_device_info(0)

#input stream for mio device //input only
input_monitor = pygame.midi.Input(0)

#into streaming loop
while True:
	if input_monitor.poll():
		#read(buffer length)
		#note data
		print(input_monitor.read(1)[0][0])
		#time
		print(input_monitor.read(1)[0][1])
		#all
		print(input_monitor.read(1)[0])
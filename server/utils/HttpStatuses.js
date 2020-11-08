const HttpStatuses = {
	OK: 200,
	CREATED: 201,
	ACCEPTED: 202,
	BAD_REQUEST: 400,
	FORBIDDEN: 403,
  CONFLICT: 409,
  PAYLOAD_TO_LARGE: 413,
  UNPROCESSABLE_ENTRY: 422,
  INTERNAL_SERVER: 500,
}

const HttpMessages = {
	Orders: {
		[HttpStatuses.CREATED]: 'Order placed successfully',
		[HttpStatuses.BAD_REQUEST]: 'Error in order placement.'
	}
}
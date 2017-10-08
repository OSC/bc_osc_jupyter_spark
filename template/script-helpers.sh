 # Generate random integer in range [$1..$2]
function random () {
  shuf -i ${1}-${2} -n 1
}

# Check if host $1 and port $2 is in use
function used_port () {
  local HOST=${1}
  local PORT=${2}
  nc -w 2 -v ${HOST} ${PORT} < /dev/null &> /dev/null
}

# Find available port in range [$2..$3] for host $1
# Default: [1024..65535]
function find_port () {
  local HOST=${1}
  local PORT=$(random ${2:-1024} ${3:-65535})
  while used_port ${HOST} ${PORT}; do
    PORT=$(random ${2:-1024} ${3:-65535})
  done
  echo ${PORT}
}

# Wait $3 seconds for host $1 and port $2 to become used
function wait_for_port () {
  local HOST=${1}
  local PORT=${2}
  local TIME=${3}
  for ((i=1; i<=TIME*2; i++)); do
    if used_port ${HOST} ${PORT}; then
      return 0
    fi
    sleep 0.5
  done
  return 1
}

# Generate random alphanumeric password with $1 (default: 32) characters
function create_passwd () {
  tr -cd '[:alnum:]' < /dev/urandom 2>/dev/null | head -c${1:-32}
}
